import { ArrowRight, Eye, EyeOff, Lock, Mail, Sparkles } from "lucide-react";
import React, { useState } from "react";
import { authService } from "../lib/auth";

interface LoginPageProps {
  onLogin: (user: any) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const user = await authService.login(formData.email, formData.password);
      onLogin(user);
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const demoCredentials = [
    { email: "sarah@elegancefashion.com", role: "Client" },
    { email: "michael@innovatetech.com", role: "Client" },
    { email: "Lumi Branding25@gmail.com", role: "Admin" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-grey via-dark-green to-dark-grey flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-gradient-to-r from-dark-grey/50 to-transparent"></div>

      <div className="relative max-w-md w-full">
        <div className="bg-beige-1/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="relative">
                <Sparkles className="h-10 w-10 text-light-green" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-light-green rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold text-text-dark">
                Lumi Branding
              </span>
            </div>
            <h1 className="text-3xl font-bold text-text-dark mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">Sign in to access your dashboard</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-2xl mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-text-dark mb-3"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-light-green focus:border-transparent transition-all duration-300 bg-beige-1"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-text-dark mb-3"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-12 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-light-green focus:border-transparent transition-all duration-300 bg-beige-1"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-light-green hover:bg-dark-green text-white py-4 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4 text-center">
              Demo Credentials:
            </p>
            <div className="space-y-2">
              {demoCredentials.map((cred, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setFormData({ email: cred.email, password: "demo" })
                  }
                  className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors text-sm"
                >
                  <div className="font-medium text-text-dark">{cred.email}</div>
                  <div className="text-gray-500">{cred.role} Account</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
