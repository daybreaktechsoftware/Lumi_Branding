// Dummy Airtable connection - replace with actual implementation
const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = import.meta.env.VITE_AIRTABLE_TABLE_NAME;

export interface ScheduleItem {
  id: string;
  clientId: string;
  clientName: string;
  date: string;
  time: string;
  projectType: string;
  description: string;
  status: "scheduled" | "completed" | "cancelled";
  createdAt: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  company: string;
  phone?: string;
}

// Dummy data for demonstration
const dummyClients: Client[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    email: "sarah@elegancefashion.com",
    company: "Elegance Fashion",
    phone: "+27 123-4567",
  },
  {
    id: "2",
    name: "Yaaseen Khan",
    email: "DayBreakTechInnovations.com",
    company: "InnovateTech",
    phone: "+27 234-5678",
  },
  {
    id: "3",
    name: "Emily Chen",
    email: "emily@stylehub.com",
    company: "StyleHub",
    phone: "+27 345-6789",
  },
];

const dummySchedule: ScheduleItem[] = [
  {
    id: "1",
    clientId: "1",
    clientName: "Sarah Mitchell",
    date: "2025-01-27",
    time: "10:00",
    projectType: "Commercial Video",
    description:
      "BMW M4 luxury car commercial shoot - Location: Downtown Studio",
    status: "scheduled",
    createdAt: "2025-01-20T10:00:00Z",
  },
  {
    id: "2",
    clientId: "1",
    clientName: "Sarah Mitchell",
    date: "2025-01-29",
    time: "14:00",
    projectType: "Product Photography",
    description: "Fashion product photography session - Spring collection",
    status: "scheduled",
    createdAt: "2025-01-20T10:00:00Z",
  },
  {
    id: "3",
    clientId: "2",
    clientName: "Michael Rodriguez",
    date: "2025-01-28",
    time: "09:00",
    projectType: "Brand Documentary",
    description: "Tech startup behind-the-scenes documentary filming",
    status: "scheduled",
    createdAt: "2025-01-20T10:00:00Z",
  },
  {
    id: "4",
    clientId: "1",
    clientName: "Sarah Mitchell",
    date: "2025-02-03",
    time: "11:30",
    projectType: "Social Media Content",
    description:
      "Instagram Reels and TikTok content creation for luxury fashion brand - Multiple outfit changes and lifestyle shots",
    status: "scheduled",
    createdAt: "2025-01-20T10:00:00Z",
  },
  {
    id: "5",
    clientId: "1",
    clientName: "Sarah Mitchell",
    date: "2025-02-07",
    time: "15:00",
    projectType: "Event Coverage",
    description:
      "Fashion Week runway show coverage - Full event documentation and backstage content",
    status: "scheduled",
    createdAt: "2025-01-20T10:00:00Z",
  },
  {
    id: "6",
    clientId: "2",
    clientName: "Michael Rodriguez",
    date: "2025-02-05",
    time: "13:00",
    projectType: "Commercial Video",
    description:
      "Product launch video for new AI software platform - Animated explainer with live action elements",
    status: "scheduled",
    createdAt: "2025-01-20T10:00:00Z",
  },
  {
    id: "7",
    clientId: "3",
    clientName: "Emily Chen",
    date: "2025-01-30",
    time: "10:00",
    projectType: "Product Photography",
    description:
      "E-commerce product photography - New winter collection lifestyle and studio shots",
    status: "scheduled",
    createdAt: "2025-01-20T10:00:00Z",
  },
  {
    id: "8",
    clientId: "3",
    clientName: "Emily Chen",
    date: "2025-02-10",
    time: "09:30",
    projectType: "Brand Documentary",
    description:
      "Company culture documentary - Employee interviews and workspace cinematography",
    status: "scheduled",
    createdAt: "2025-01-20T10:00:00Z",
  },
  {
    id: "9",
    clientId: "1",
    clientName: "Sarah Mitchell",
    date: "2025-02-14",
    time: "16:00",
    projectType: "Fashion Photography",
    description:
      "Valentine's Day campaign shoot - Romantic luxury fashion editorial with couples",
    status: "scheduled",
    createdAt: "2025-01-20T10:00:00Z",
  },
  {
    id: "10",
    clientId: "2",
    clientName: "Michael Rodriguez",
    date: "2025-02-12",
    time: "14:30",
    projectType: "Corporate Headshots",
    description:
      "Executive team professional headshots - Clean, modern corporate photography for website and LinkedIn",
    status: "scheduled",
    createdAt: "2025-01-20T10:00:00Z",
  },
  {
    id: "11",
    clientId: "3",
    clientName: "Emily Chen",
    date: "2025-02-18",
    time: "11:00",
    projectType: "Social Media Content",
    description:
      "Behind-the-scenes content creation - Day-in-the-life style content for authentic brand storytelling",
    status: "scheduled",
    createdAt: "2025-01-20T10:00:00Z",
  },
  // Additional upcoming projects for more data
  {
    id: "15",
    clientId: "1",
    clientName: "Sarah Mitchell",
    date: "2025-02-20",
    time: "10:00",
    projectType: "Commercial Video",
    description:
      "Luxury perfume commercial - Cinematic storytelling with elegant visuals and sophisticated lighting",
    status: "scheduled",
    createdAt: "2025-01-20T10:00:00Z",
  },
  {
    id: "16",
    clientId: "2",
    clientName: "Michael Rodriguez",
    date: "2025-02-22",
    time: "09:00",
    projectType: "Product Photography",
    description:
      "New smartphone launch photography - Clean product shots and lifestyle imagery for marketing campaign",
    status: "scheduled",
    createdAt: "2025-01-20T10:00:00Z",
  },
  {
    id: "17",
    clientId: "3",
    clientName: "Emily Chen",
    date: "2025-02-25",
    time: "14:00",
    projectType: "Event Coverage",
    description:
      "Company anniversary celebration - Full event documentation including speeches, networking, and highlights reel",
    status: "scheduled",
    createdAt: "2025-01-20T10:00:00Z",
  },
  {
    id: "18",
    clientId: "1",
    clientName: "Sarah Mitchell",
    date: "2025-03-01",
    time: "11:00",
    projectType: "Fashion Photography",
    description:
      "Spring/Summer collection editorial shoot - Outdoor location with natural lighting and flowing fabrics",
    status: "scheduled",
    createdAt: "2025-01-20T10:00:00Z",
  },
  {
    id: "19",
    clientId: "2",
    clientName: "Michael Rodriguez",
    date: "2025-03-05",
    time: "15:30",
    projectType: "Social Media Content",
    description:
      "Tech tips video series - Educational content for LinkedIn and YouTube showcasing software features",
    status: "scheduled",
    createdAt: "2025-01-20T10:00:00Z",
  },
  {
    id: "20",
    clientId: "3",
    clientName: "Emily Chen",
    date: "2025-03-08",
    time: "10:30",
    projectType: "Commercial Video",
    description:
      "International Women's Day campaign video - Empowering stories from female entrepreneurs and leaders",
    status: "scheduled",
    createdAt: "2025-01-20T10:00:00Z",
  },
  {
    id: "21",
    clientId: "2",
    clientName: "Michael Rodriguez",
    date: "2025-02-15",
    time: "10:00",
    projectType: "Commercial Video",
    description:
      "AI software demo video - Animated explainer showcasing machine learning capabilities and user interface",
    status: "scheduled",
    createdAt: "2025-01-20T10:00:00Z",
  },
  {
    id: "22",
    clientId: "2",
    clientName: "Michael Rodriguez",
    date: "2025-02-28",
    time: "13:30",
    projectType: "Corporate Headshots",
    description:
      "New team member professional headshots - Clean, modern corporate photography for website and press releases",
    status: "scheduled",
    createdAt: "2025-01-20T10:00:00Z",
  },
  {
    id: "23",
    clientId: "2",
    clientName: "Michael Rodriguez",
    date: "2025-03-12",
    time: "09:30",
    projectType: "Event Coverage",
    description:
      "Tech conference keynote presentation - Full event documentation including Q&A session and networking",
    status: "scheduled",
    createdAt: "2025-01-20T10:00:00Z",
  },
  {
    id: "24",
    clientId: "2",
    clientName: "Michael Rodriguez",
    date: "2025-03-18",
    time: "14:00",
    projectType: "Product Photography",
    description:
      "Hardware product line photography - Technical shots and lifestyle imagery for new IoT devices launch",
    status: "scheduled",
    createdAt: "2025-01-20T10:00:00Z",
  },
  {
    id: "25",
    clientId: "2",
    clientName: "Michael Rodriguez",
    date: "2025-03-25",
    time: "11:00",
    projectType: "Social Media Content",
    description:
      "Behind-the-scenes content creation - Day in the life of a tech startup for authentic brand storytelling",
    status: "scheduled",
    createdAt: "2025-01-20T10:00:00Z",
  },
  // Past projects for demonstration
  {
    id: "12",
    clientId: "1",
    clientName: "Sarah Mitchell",
    date: "2025-01-15",
    time: "10:00",
    projectType: "Commercial Video",
    description:
      "Holiday campaign video - Luxury fashion brand seasonal collection showcase",
    status: "completed",
    createdAt: "2025-01-10T10:00:00Z",
  },
  {
    id: "13",
    clientId: "2",
    clientName: "Michael Rodriguez",
    date: "2025-01-18",
    time: "14:00",
    projectType: "Product Photography",
    description:
      "Tech product photography - Clean, minimalist shots for website and marketing materials",
    status: "completed",
    createdAt: "2025-01-10T10:00:00Z",
  },
  {
    id: "14",
    clientId: "3",
    clientName: "Emily Chen",
    date: "2025-01-12",
    time: "09:00",
    projectType: "Brand Documentary",
    description:
      "Year-end company retrospective video - Highlighting achievements and team growth",
    status: "completed",
    createdAt: "2025-01-05T10:00:00Z",
  },
];

class AirtableService {
  private apiKey: string;
  private baseId: string;
  private tableName: string;

  constructor() {
    this.apiKey = AIRTABLE_API_KEY || "";
    this.baseId = AIRTABLE_BASE_ID || "";
    this.tableName = AIRTABLE_TABLE_NAME || "";
  }

  // Dummy implementation - replace with actual Airtable API calls
  async getClients(): Promise<Client[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return dummyClients;
  }

  async getClientSchedule(clientId: string): Promise<ScheduleItem[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return dummySchedule.filter((item) => item.clientId === clientId);
  }

  async getAllSchedules(): Promise<ScheduleItem[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return dummySchedule;
  }

  async createScheduleItem(
    item: Omit<ScheduleItem, "id" | "createdAt">
  ): Promise<ScheduleItem> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const newItem: ScheduleItem = {
      ...item,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    dummySchedule.push(newItem);
    return newItem;
  }

  async updateScheduleItem(
    id: string,
    updates: Partial<ScheduleItem>
  ): Promise<ScheduleItem> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const index = dummySchedule.findIndex((item) => item.id === id);
    if (index === -1) throw new Error("Schedule item not found");

    dummySchedule[index] = { ...dummySchedule[index], ...updates };
    return dummySchedule[index];
  }

  async deleteScheduleItem(id: string): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const index = dummySchedule.findIndex((item) => item.id === id);
    if (index === -1) throw new Error("Schedule item not found");

    dummySchedule.splice(index, 1);
  }
}

export const airtableService = new AirtableService();
