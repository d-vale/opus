import type { Resource, Article, User } from '../types';

const API_BASE_URL = 'http://localhost:3001/api';

// Helper function for API calls
async function apiCall<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: 'Request failed' }));
    throw new Error(error.error || 'Request failed');
  }

  return response.json();
}

// Auth API
export const authAPI = {
  register: async (name: string, email: string, password: string): Promise<{ user: User }> => {
    return apiCall('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });
  },

  login: async (email: string, password: string): Promise<{ user: User }> => {
    return apiCall('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },
};

// Resources API
export const resourcesAPI = {
  getAll: async (): Promise<Resource[]> => {
    return apiCall('/resources');
  },

  getFeatured: async (): Promise<Resource[]> => {
    return apiCall('/resources/featured');
  },

  getById: async (id: string): Promise<Resource> => {
    return apiCall(`/resources/${id}`);
  },

  getByCategory: async (category: string): Promise<Resource[]> => {
    return apiCall(`/resources/category/${encodeURIComponent(category)}`);
  },
};

// Articles API
export const articlesAPI = {
  getAll: async (): Promise<Article[]> => {
    return apiCall('/articles');
  },

  getById: async (id: string): Promise<Article> => {
    return apiCall(`/articles/${id}`);
  },

  create: async (article: Omit<Article, 'id'>): Promise<{ id: string; message: string }> => {
    return apiCall('/admin/articles', {
      method: 'POST',
      body: JSON.stringify(article),
    });
  },

  update: async (id: string, article: Omit<Article, 'id'>): Promise<{ message: string }> => {
    return apiCall(`/admin/articles/${id}`, {
      method: 'PUT',
      body: JSON.stringify(article),
    });
  },

  delete: async (id: string): Promise<{ message: string }> => {
    return apiCall(`/admin/articles/${id}`, {
      method: 'DELETE',
    });
  },
};

// Favorites API
export const favoritesAPI = {
  add: async (userId: string, resourceId: string): Promise<{ message: string }> => {
    return apiCall('/favorites', {
      method: 'POST',
      body: JSON.stringify({ userId, resourceId }),
    });
  },

  remove: async (userId: string, resourceId: string): Promise<{ message: string }> => {
    return apiCall('/favorites', {
      method: 'DELETE',
      body: JSON.stringify({ userId, resourceId }),
    });
  },

  getUserFavorites: async (userId: string): Promise<Resource[]> => {
    return apiCall(`/favorites/${userId}`);
  },
};

// History API
export const historyAPI = {
  add: async (userId: string, resourceId: string): Promise<{ message: string }> => {
    return apiCall('/history', {
      method: 'POST',
      body: JSON.stringify({ userId, resourceId }),
    });
  },

  getUserHistory: async (userId: string): Promise<Resource[]> => {
    return apiCall(`/history/${userId}`);
  },

  clear: async (userId: string): Promise<{ message: string }> => {
    return apiCall(`/history/${userId}`, {
      method: 'DELETE',
    });
  },
};

// Submissions API
export interface Submission {
  id: string;
  title: string;
  category: string;
  visual: string;
  description: string;
  link: string;
  tags: string[];
  submitted_by: string;
  submitter_name?: string;
  submitter_email?: string;
  status: 'pending' | 'approved' | 'rejected';
  admin_notes?: string;
  created_at: string;
  reviewed_at?: string;
  reviewed_by?: string;
}

export const submissionsAPI = {
  create: async (submission: {
    title: string;
    category: string;
    visual: string;
    description: string;
    link: string;
    tags: string[];
    userId: string;
  }): Promise<{ id: string; message: string }> => {
    return apiCall('/submissions', {
      method: 'POST',
      body: JSON.stringify(submission),
    });
  },

  getAll: async (): Promise<Submission[]> => {
    return apiCall('/admin/submissions');
  },

  getPending: async (): Promise<Submission[]> => {
    return apiCall('/admin/submissions/pending');
  },

  approve: async (id: string, adminId: string, notes?: string): Promise<{ message: string }> => {
    return apiCall(`/admin/submissions/${id}/approve`, {
      method: 'POST',
      body: JSON.stringify({ adminId, notes }),
    });
  },

  reject: async (id: string, adminId: string, notes?: string): Promise<{ message: string }> => {
    return apiCall(`/admin/submissions/${id}/reject`, {
      method: 'POST',
      body: JSON.stringify({ adminId, notes }),
    });
  },
};
