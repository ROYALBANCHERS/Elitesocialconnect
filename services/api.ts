// API Service for EliteSocialConnect
// Handles all API calls to the backend

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

interface ApiResponse<T> {
  status: 'success' | 'error';
  message?: string;
  data?: T;
  count?: number;
  error?: string;
}

class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;

    const defaultHeaders: HeadersInit = {
      'Content-Type': 'application/json',
    };

    // Add auth token if available
    const token = localStorage.getItem('auth_token');
    if (token) {
      defaultHeaders['Authorization'] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers: { ...defaultHeaders, ...options.headers },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      return data;
    } catch (error) {
      if (error instanceof Error) {
        return {
          status: 'error',
          message: error.message,
        };
      }
      return {
        status: 'error',
        message: 'An unexpected error occurred',
      };
    }
  }

  // ===== SERVICES =====
  async getServices() {
    return this.request('/services');
  }

  async getService(slug: string) {
    return this.request(`/services/${slug}`);
  }

  // ===== PORTFOLIO =====
  async getPortfolio(params?: { category?: string; client?: string; year?: string }) {
    const queryParams = new URLSearchParams();
    if (params?.category) queryParams.append('category', params.category);
    if (params?.client) queryParams.append('client', params.client);
    if (params?.year) queryParams.append('year', params.year);

    const queryString = queryParams.toString();
    return this.request(`/portfolio${queryString ? `?${queryString}` : ''}`);
  }

  async getPortfolioItem(id: number) {
    return this.request(`/portfolio/${id}`);
  }

  // ===== INDUSTRIES =====
  async getIndustries() {
    return this.request('/industries');
  }

  // ===== BLOGS =====
  async getBlogs(params?: { category?: string; search?: string }) {
    const queryParams = new URLSearchParams();
    if (params?.category) queryParams.append('category', params.category);
    if (params?.search) queryParams.append('search', params.search);

    const queryString = queryParams.toString();
    return this.request(`/blogs${queryString ? `?${queryString}` : ''}`);
  }

  async getBlog(slug: string) {
    return this.request(`/blogs/${slug}`);
  }

  // ===== STATS =====
  async getStats() {
    return this.request('/stats');
  }

  // ===== TEAM =====
  async getTeam() {
    return this.request('/team');
  }

  // ===== CONTACT FORM =====
  async submitContactForm(data: {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    message: string;
    service?: string;
  }) {
    return this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // ===== NEWSLETTER =====
  async subscribeToNewsletter(email: string) {
    return this.request('/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }

  // ===== ADMIN =====
  async adminLogin(credentials: { username: string; password: string }) {
    const response = await this.request('/admin/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });

    // Store token if successful
    if (response.status === 'success' && response.data) {
      const { token } = response.data as { token: string; user: unknown };
      localStorage.setItem('auth_token', token);
    }

    return response;
  }

  async getDashboard() {
    return this.request('/admin/dashboard');
  }

  async updateStats(stats: Record<string, string>) {
    return this.request('/admin/stats', {
      method: 'PUT',
      body: JSON.stringify(stats),
    });
  }

  async createBlog(data: {
    title: string;
    excerpt?: string;
    content: string;
    image?: string;
    category?: string;
    author?: string;
  }) {
    return this.request('/admin/blogs', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async addPortfolioItem(data: {
    title: string;
    category: string;
    imageUrl: string;
    client?: string;
    year?: string;
    description?: string;
    projectUrl?: string;
  }) {
    return this.request('/admin/portfolio', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  logout() {
    localStorage.removeItem('auth_token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('auth_token');
  }
}

// Export singleton instance
export const api = new ApiService();
