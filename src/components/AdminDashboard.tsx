import {
  Calendar,
  CalendarDays,
  Clock,
  Columns,
  Edit,
  LogOut,
  Plus,
  Save,
  Table,
  Trash2,
  Users,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { airtableService, Client, ScheduleItem } from "../lib/airtable";
import { User } from "../lib/auth";

interface AdminDashboardProps {
  user: User;
  onLogout: () => void;
}

type ViewType = "table" | "kanban" | "calendar";

const AdminDashboard: React.FC<AdminDashboardProps> = ({ user, onLogout }) => {
  const [schedules, setSchedules] = useState<ScheduleItem[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingItem, setEditingItem] = useState<ScheduleItem | null>(null);
  const [currentView, setCurrentView] = useState<ViewType>("table");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // 8 items per page
  const [formData, setFormData] = useState({
    clientId: "",
    date: "",
    time: "",
    projectType: "",
    description: "",
    status: "scheduled" as const,
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [schedulesData, clientsData] = await Promise.all([
        airtableService.getAllSchedules(),
        airtableService.getClients(),
        airtableService.getClients(),
      ]);
      setSchedules(schedulesData);
      setClients(clientsData);
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const clientName =
        clients.find((c) => c.id === formData.clientId)?.name || "";

      if (editingItem) {
        await airtableService.updateScheduleItem(editingItem.id, {
          ...formData,
          clientName,
        });
      } else {
        await airtableService.createScheduleItem({
          ...formData,
          clientName,
        });
      }

      await loadData();
      resetForm();
    } catch (error) {
      console.error("Error saving schedule item:", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this schedule item?")) {
      try {
        await airtableService.deleteScheduleItem(id);
        await loadData();
      } catch (error) {
        console.error("Error deleting schedule item:", error);
      }
    }
  };

  const handleEdit = (item: ScheduleItem) => {
    setEditingItem(item);
    setFormData({
      clientId: item.clientId,
      date: item.date,
      time: item.time,
      projectType: item.projectType,
      description: item.description,
      status: item.status,
    });
    setShowAddForm(true);
  };

  const resetForm = () => {
    setFormData({
      clientId: "",
      date: "",
      time: "",
      projectType: "",
      description: "",
      status: "scheduled",
    });
    setEditingItem(null);
    setShowAddForm(false);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const projectTypes = [
    "Commercial Video",
    "Brand Documentary",
    "Product Photography",
    "Fashion Photography",
    "Social Media Content",
    "Event Coverage",
    "Corporate Headshots",
    "Lifestyle Shoots",
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(":");
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const viewOptions = [
    { id: "table", name: "Table", icon: Table },
    { id: "kanban", name: "Kanban", icon: Columns },
    { id: "calendar", name: "Calendar", icon: CalendarDays },
  ];

  // Pagination logic
  const totalItems = schedules.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedSchedules = schedules.slice(startIndex, endIndex);

  // Reset to first page when view changes
  useEffect(() => {
    setCurrentPage(1);
  }, [currentView]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pageNumbers = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex items-center justify-between mt-8">
        <div className="text-sm text-gray-600">
          Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of{" "}
          {totalItems} entries
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm font-medium text-gray-600 bg-beige-1 border border-gray-200 rounded-xl hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>

          {startPage > 1 && (
            <>
              <button
                onClick={() => handlePageChange(1)}
                className="px-3 py-2 text-sm font-medium text-gray-600 bg-beige-1 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
              >
                1
              </button>
              {startPage > 2 && <span className="text-gray-400">...</span>}
            </>
          )}

          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-2 text-sm font-medium rounded-xl transition-colors ${
                page === currentPage
                  ? "bg-light-green text-white"
                  : "text-gray-600 bg-beige-1 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}

          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && (
                <span className="text-gray-400">...</span>
              )}
              <button
                onClick={() => handlePageChange(totalPages)}
                className="px-3 py-2 text-sm font-medium text-gray-600 bg-beige-1 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
              >
                {totalPages}
              </button>
            </>
          )}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm font-medium text-gray-600 bg-beige-1 border border-gray-200 rounded-xl hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  // Kanban columns
  const kanbanColumns = [
    {
      id: "scheduled",
      title: "Scheduled",
      color: "bg-blue-50 border-blue-200",
    },
    {
      id: "completed",
      title: "Completed",
      color: "bg-green-50 border-green-200",
    },
    { id: "cancelled", title: "Cancelled", color: "bg-red-50 border-red-200" },
  ];

  // Calendar helpers
  const getCurrentMonth = () => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const getSchedulesForDate = (date: Date) => {
    const dateString = date.toISOString().split("T")[0];
    return schedules.filter((schedule) => schedule.date === dateString);
  };

  const renderTableView = () => (
    <div className="bg-beige-1 rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-text-dark">
                Client
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-text-dark">
                Project Type
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-text-dark">
                Date & Time
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-text-dark">
                Status
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-text-dark">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {paginatedSchedules.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div>
                    <div className="font-medium text-text-dark">
                      {item.clientName}
                    </div>
                    <div className="text-sm text-gray-500">
                      {item.description}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="bg-light-green/10 text-light-green px-3 py-1 rounded-full text-sm font-medium">
                    {item.projectType}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(item.date)}</span>
                    <Clock className="h-4 w-4 ml-2" />
                    <span>{formatTime(item.time)}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : item.status === "cancelled"
                        ? "bg-red-100 text-red-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="text-light-green hover:text-dark-green transition-colors"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {renderPagination()}
    </div>
  );

  const renderKanbanView = () => (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {kanbanColumns.map((column) => {
          const columnItems = paginatedSchedules.filter(
            (schedule) => schedule.status === column.id
          );
          const totalColumnItems = schedules.filter(
            (s) => s.status === column.id
          ).length;

          return (
            <div
              key={column.id}
              className={`rounded-3xl border-2 ${column.color} p-6`}
            >
              <h3 className="text-lg font-bold text-text-dark mb-6 flex items-center justify-between">
                {column.title}
                <span className="bg-beige-1 px-3 py-1 rounded-full text-sm font-medium">
                  {totalColumnItems}
                </span>
              </h3>

              <div className="space-y-4">
                {columnItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-beige-1 rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-semibold text-text-dark text-sm">
                        {item.clientName}
                      </h4>
                      <div className="flex items-center space-x-1">
                        <button
                          onClick={() => handleEdit(item)}
                          className="text-light-green hover:text-dark-green transition-colors"
                        >
                          <Edit className="h-3 w-3" />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    </div>

                    <div className="mb-3">
                      <span className="bg-light-green/10 text-light-green px-2 py-1 rounded-lg text-xs font-medium">
                        {item.projectType}
                      </span>
                    </div>

                    <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(item.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{formatTime(item.time)}</span>
                      </div>
                    </div>
                  </div>
                ))}

                {columnItems.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <p className="text-sm">No items on this page</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {renderPagination()}
    </div>
  );

  const renderCalendarView = () => {
    const currentMonth = getCurrentMonth();
    const days = getDaysInMonth(currentMonth);
    const monthName = currentMonth.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
      <div className="bg-beige-1 rounded-3xl shadow-lg border border-gray-100 p-6">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-text-dark text-center">
            {monthName}
          </h3>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-4">
          {weekDays.map((day) => (
            <div
              key={day}
              className="text-center text-sm font-semibold text-gray-600 py-2"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {days.map((day, index) => {
            if (!day) {
              return <div key={index} className="h-24"></div>;
            }

            const daySchedules = getSchedulesForDate(day);
            const isToday = day.toDateString() === new Date().toDateString();

            return (
              <div
                key={index}
                className={`h-24 border border-gray-200 rounded-xl p-2 ${
                  isToday
                    ? "bg-light-green/10 border-light-green"
                    : "bg-gray-50 hover:bg-gray-100"
                } transition-colors cursor-pointer`}
              >
                <div
                  className={`text-sm font-medium mb-1 ${
                    isToday ? "text-light-green" : "text-gray-700"
                  }`}
                >
                  {day.getDate()}
                </div>

                <div className="space-y-1">
                  {daySchedules.slice(0, 2).map((schedule) => (
                    <div
                      key={schedule.id}
                      className={`text-xs px-2 py-1 rounded-lg truncate ${
                        schedule.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : schedule.status === "cancelled"
                          ? "bg-red-100 text-red-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                      title={`${schedule.clientName} - ${schedule.projectType}`}
                    >
                      {schedule.clientName}
                    </div>
                  ))}
                  {daySchedules.length > 2 && (
                    <div className="text-xs text-gray-500 px-2">
                      +{daySchedules.length - 2} more
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-light-green/30 border-t-light-green rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <header className="bg-beige-1/95 backdrop-blur-md shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-light-green to-emerald-400 rounded-2xl flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-text-dark">
                  Admin Dashboard
                </h1>
                <p className="text-gray-600">
                  Manage client schedules and projects
                </p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-text-dark mb-4">
              Schedule Management
            </h2>
            <p className="text-xl text-gray-600">
              Create and manage client project schedules
            </p>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-light-green hover:bg-dark-green text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
          >
            <Plus className="h-5 w-5" />
            <span>Add Schedule</span>
          </button>
        </div>

        {/* View Toggle */}
        <div className="mb-8">
          <div className="bg-beige-1 rounded-2xl p-2 shadow-lg border border-gray-100 inline-flex">
            {viewOptions.map((option) => {
              const IconComponent = option.icon;
              return (
                <button
                  key={option.id}
                  onClick={() => setCurrentView(option.id as ViewType)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    currentView === option.id
                      ? "bg-light-green text-white shadow-md"
                      : "text-gray-600 hover:text-light-green hover:bg-light-green/5"
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                  <span>{option.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Render Current View */}
        {currentView === "table" && renderTableView()}
        {currentView === "kanban" && renderKanbanView()}
        {currentView === "calendar" && renderCalendarView()}

        {/* Add/Edit Form Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <div className="bg-beige-1 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-text-dark">
                    {editingItem ? "Edit Schedule" : "Add New Schedule"}
                  </h3>
                  <button
                    onClick={resetForm}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-text-dark mb-3">
                        Client *
                      </label>
                      <select
                        name="clientId"
                        required
                        value={formData.clientId}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-light-green focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a client</option>
                        {clients.map((client) => (
                          <option key={client.id} value={client.id}>
                            {client.name} - {client.company}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-text-dark mb-3">
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-light-green focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-text-dark mb-3">
                        Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-light-green focus:border-transparent transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-text-dark mb-3">
                        Time *
                      </label>
                      <input
                        type="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-light-green focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-text-dark mb-3">
                      Status
                    </label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-light-green focus:border-transparent transition-all duration-300"
                    >
                      <option value="scheduled">Scheduled</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-text-dark mb-3">
                      Description *
                    </label>
                    <textarea
                      name="description"
                      required
                      rows={4}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Describe the project details, location, requirements, etc."
                      className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-light-green focus:border-transparent transition-all duration-300 resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-end space-x-4 pt-6">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-6 py-3 border border-gray-200 text-gray-600 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-light-green hover:bg-dark-green text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
                    >
                      <Save className="h-5 w-5" />
                      <span>{editingItem ? "Update" : "Create"} Schedule</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
