// Core data types
export interface Donation {
    id: string;
    donorName: string;
    amount: number;
    currency: string;
    date: string;
    campaignId: string;
    status: 'completed' | 'pending' | 'failed';
    paymentMethod: string;
}

export interface Campaign {
    id: string;
    name: string;
    description: string;
    goal: number;
    currentAmount: number;
    startDate: string;
    endDate: string;
    status: 'active' | 'completed' | 'upcoming';
    category: string;
    donors: number;
}

export interface DashboardStats {
    totalRaised: number;
    monthlyGrowth: number;
    activeCampaigns: number;
    totalDonors: number;
    averageDonation: number;
    monthlyGoal: number;
}

export interface DashboardData {
    stats: DashboardStats;
    recentDonations: Donation[];
    campaigns: Campaign[];
}

// Theme types
export type Theme = 'light' | 'dark';

export interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    isDark: boolean;
}