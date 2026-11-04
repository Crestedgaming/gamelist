export type Game = {

id: number;
title: string;
platform: string;
status: GamerStatus;
rating: number | null;
coverUrl: string | null;
notes: string| null;


}

export type GamerStatus = 'all' | 'want-to-play' | 'playing' | 'completed' | 'dropped' | (string & {})