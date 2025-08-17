import {
  Calendar,
  Camera,
  CheckCircle,
  Clock,
  FileText,
  LogOut,
  Video,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { airtableService, ScheduleItem } from "../lib/airtable";
import { User } from "../lib/auth";

interface ClientDashboardProps {
  user: User;
  onLogout: () => void;
}

const ClientDashboard: React.FC<ClientDashboardProps> = ({
  user,
  onLogout,
}) => {
  const [schedule, setSchedule] = useState<ScheduleItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadSchedule();
  }, [user.clientId]);

  const loadSchedule = async () => {
    try {
      if (user.clientId) {
        const data = await airtableService.getClientSchedule(user.clientId);
        setSchedule(data);
      }
    } catch (error) {
      console.error("Error loading schedule:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getProjectIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "commercial video":
      case "brand documentary":
        return Video;
      case "product photography":
      case "fashion photography":
        return Camera;
      default:
        return FileText;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-50 border-green-200";
      case "cancelled":
        return "text-red-600 bg-red-50 border-red-200";
      default:
        return "text-blue-600 bg-blue-50 border-blue-200";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
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

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to start of day for accurate comparison

  // Debug logging
  console.log("Current user:", user);
  console.log("All schedule data:", schedule);
  console.log("Today date:", today);

  const upcomingSchedule = schedule.filter((item) => {
    const itemDate = new Date(item.date);
    itemDate.setHours(0, 0, 0, 0);
    const isUpcoming = itemDate >= today;
    console.log(
      `Item ${item.id}: ${item.date} -> ${itemDate} >= ${today} = ${isUpcoming}`
    );
    return isUpcoming;
  });

  const pastSchedule = schedule.filter((item) => {
    const itemDate = new Date(item.date);
    itemDate.setHours(0, 0, 0, 0);
    return itemDate < today;
  });

  console.log("Upcoming schedule:", upcomingSchedule);
  console.log("Past schedule:", pastSchedule);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-light-green/30 border-t-light-green rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your schedule...</p>
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
              <div className="w-12 h-12 bg-light-green rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {user.name.charAt(0)}
                </span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-text-dark">
                  Welcome back, {user.name}
                </h1>
                <p className="text-gray-600">{user.email}</p>
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
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-text-dark mb-4">
            Your Project Schedule
          </h2>
          <p className="text-xl text-gray-600">
            Stay updated with your upcoming shoots and projects
          </p>
        </div>

        {/* Upcoming Schedule */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-text-dark flex items-center">
              <Calendar className="h-8 w-8 text-light-green mr-4" />
              Upcoming Projects
            </h3>
            <div className="bg-light-green/10 text-light-green px-4 py-2 rounded-full">
              <span className="font-semibold">
                {upcomingSchedule.length} Projects
              </span>
            </div>
          </div>

          {upcomingSchedule.length === 0 ? (
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-16 text-center shadow-lg border border-gray-100">
              <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-12 w-12 text-gray-400" />
              </div>
              <h4 className="text-2xl font-bold text-gray-700 mb-4">
                No upcoming projects scheduled
              </h4>
              <p className="text-lg text-gray-500 max-w-md mx-auto">
                Your schedule is clear for now. New projects will appear here
                when they're scheduled.
              </p>
              <div className="mt-8 text-sm text-gray-400">
                <p>Debug Info:</p>
                <p>Total schedule items: {schedule.length}</p>
                <p>Client ID: {user.clientId}</p>
                <p>User email: {user.email}</p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {upcomingSchedule.map((item) => {
                const IconComponent = getProjectIcon(item.projectType);
                return (
                  <div
                    key={item.id}
                    className="bg-beige-1 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-light-green/20 hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-light-green/10 p-4 rounded-2xl">
                          <IconComponent className="h-8 w-8 text-light-green" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-text-dark mb-2">
                            {item.projectType}
                          </h4>
                          <div className="flex items-center space-x-4 text-gray-600">
                            <div className="flex items-center space-x-2">
                              <Calendar className="h-5 w-5 text-light-green" />
                              <span className="font-medium">
                                {formatDate(item.date)}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Clock className="h-5 w-5 text-light-green" />
                              <span className="font-medium">
                                {formatTime(item.time)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(
                          item.status
                        )}`}
                      >
                        {item.status.charAt(0).toUpperCase() +
                          item.status.slice(1)}
                      </span>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h5 className="font-semibold text-text-dark mb-3">
                        Project Details
                      </h5>
                      <p className="text-gray-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Past Schedule */}
        {pastSchedule.length > 0 && (
          <div>
            <h3 className="text-3xl font-bold text-text-dark mb-8 flex items-center">
              <CheckCircle className="h-6 w-6 text-gray-400 mr-3" />
              Past Projects
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastSchedule.map((item) => {
                const IconComponent = getProjectIcon(item.projectType);
                return (
                  <div
                    key={item.id}
                    className="bg-beige-1/60 rounded-3xl p-6 shadow-md border border-gray-100 opacity-75"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-gray-100 p-3 rounded-2xl">
                        <IconComponent className="h-6 w-6 text-gray-400" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold border bg-gray-50 text-gray-600 border-gray-200">
                        Completed
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-gray-700 mb-2">
                      {item.projectType}
                    </h4>
                    <p className="text-gray-500 mb-4 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{formatDate(item.date)}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{formatTime(item.time)}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ClientDashboard;
