// Simple authentication service - replace with actual auth implementation
export interface User {
  id: string;
  email: string;
  name: string;
  role: "client" | "admin";
  clientId?: string;
}

// Dummy users for demonstration
const dummyUsers: User[] = [
  {
    id: "1",
    email: "sarah@elegancefashion.com",
    name: "Sarah Mitchell",
    role: "client",
    clientId: "1",
  },
  {
    id: "2",
    email: "michael@innovatetech.com",
    name: "Michael Rodriguez",
    role: "client",
    clientId: "2",
  },
  {
    id: "3",
    email: "emily@stylehub.com",
    name: "Emily Chen",
    role: "client",
    clientId: "3",
  },
  {
    id: "admin",
    email: "Lumi Branding25@gmail.com",
    name: "Admin User",
    role: "admin",
  },
];

class AuthService {
  private currentUser: User | null = null;

  async login(email: string, password: string): Promise<User> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Simple dummy authentication
    const user = dummyUsers.find((u) => u.email === email);
    if (!user) {
      throw new Error("Invalid email or password");
    }

    // For demo purposes, any password works
    this.currentUser = user;
    localStorage.setItem("currentUser", JSON.stringify(user));
    return user;
  }

  async logout(): Promise<void> {
    this.currentUser = null;
    localStorage.removeItem("currentUser");
  }

  getCurrentUser(): User | null {
    if (this.currentUser) return this.currentUser;

    const stored = localStorage.getItem("currentUser");
    if (stored) {
      this.currentUser = JSON.parse(stored);
      return this.currentUser;
    }

    return null;
  }

  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  }

  isAdmin(): boolean {
    const user = this.getCurrentUser();
    return user?.role === "admin";
  }
}

export const authService = new AuthService();
