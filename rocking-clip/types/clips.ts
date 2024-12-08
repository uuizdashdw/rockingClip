export interface Clip {
	id: number;
	clipName: string;
	clipPath: string;
	description: string;
	favorite: boolean;
	favoriteLevel: string;
	createdAt: string;
}

export interface ClipFieldErrors {
	clipName?: string;
	clipPath?: string;
	description?: string;
	favoriteLevel?: string;
}
