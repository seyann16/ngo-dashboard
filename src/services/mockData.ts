import { DashboardData, Donation, Campaign } from "../types";

// Generate mock donations
const generateDonations = (): Donation[] => {
  const donors = [
    "John Smith",
    "Sarah Johnson",
    "Mike Chen",
    "Emily Davis",
    "Robert Brown",
    "Lisa Wilson",
  ];
  const campaigns = [
    "Education Fund",
    "Clean Water",
    "Medical Aid",
    "Food Drive",
  ];
  const statuses: ("completed" | "pending" | "failed")[] = [
    "completed",
    "pending",
    "failed",
  ];
  const paymentMethods = ["Credit Card", "PayPal", "Bank Transfer"];

  return Array.from({ length: 8 }, (_, i) => ({
    id: `donation-${i + 1}`,
    donorName: donors[Math.floor(Math.random() * donors.length)],
    amount: Math.floor(Math.random() * 1000) + 50,
    currency: "USD",
    date: new Date(
      Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000
    ).toISOString(),
    campaignId: campaigns[Math.floor(Math.random() * campaigns.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    paymentMethod:
      paymentMethods[Math.floor(Math.random() * paymentMethods.length)],
  }));
};

// Generate mock campaigns
const generateCampaigns = (): Campaign[] => [
  {
    id: "campaign-1",
    name: "Education Fund",
    description: "Providing education resources for underprivileged children",
    goal: 50000,
    currentAmount: 32500,
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    status: "active",
    category: "Education",
    donors: 234,
  },
  {
    id: "campaign-2",
    name: "Clean Water Initiative",
    description: "Building wells and water purification systems",
    goal: 75000,
    currentAmount: 45800,
    startDate: "2024-02-15",
    endDate: "2024-11-30",
    status: "active",
    category: "Health",
    donors: 187,
  },
  {
    id: "campaign-3",
    name: "Medical Aid Program",
    description: "Providing medical supplies and healthcare services",
    goal: 100000,
    currentAmount: 82300,
    startDate: "2024-01-10",
    endDate: "2024-10-31",
    status: "active",
    category: "Health",
    donors: 312,
  },
];

// Main mock data function
export const getDashboardData = (): Promise<DashboardData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const donations = generateDonations();
      const campaigns = generateCampaigns();

      const totalRaised = donations
        .filter((d) => d.status === "completed")
        .reduce((sum, donation) => sum + donation.amount, 0);

      resolve({
        stats: {
          totalRaised,
          monthlyGrowth: 12.5,
          activeCampaigns: campaigns.length,
          totalDonors: 845,
          averageDonation: 245,
          monthlyGoal: 50000,
        },
        recentDonations: donations,
        campaigns,
      });
    }, 800); // Simulate API delay
  });
};
