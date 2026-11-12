export type Game = {
  id: string;
  title: string;
  platform: string;
  status: GamerStatus;
  rating: number | null;
  coverUrl: string | null;
  notes: string | null;
};

export type FilterStatus = GamerStatus | "all";

export type GamerStatus =
  | "want"
  | "playing"
  | "completed"
  | "dropped";

