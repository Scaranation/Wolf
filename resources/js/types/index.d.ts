export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface Game {
    id: number;
    name: string;
    description: string;
    image: string;
    slug: string;
    created_at: string;
    updated_at: string;
    topup_products: TopupProduct[];
    jockey_products: JockeyProduct[];
}

export interface JockeyProduct {
    id: number;
    product_name: string;
    price: number;
    details: string;
    game_id: number;
    created_at: string;
    updated_at: string;
    game: Game;
}
export interface TopupProduct {
    id: number;
    product_name: string;
    price: number;
    details: string;
    game_id: number;
    created_at: string;
    updated_at: string;
    game: Game;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    flash: {
        success: string;
        error: string;
    };
    games: Game[];
};
