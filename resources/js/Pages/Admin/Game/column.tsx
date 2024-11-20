import { ColumnDef } from "@tanstack/react-table";
import { Game } from "@/types";
import { Button } from "@/Components/ui/button";
import {
    ArrowUpDown,
    CheckIcon,
    CircleX,
    ClockIcon,
    EyeIcon,
    EyeOffIcon,
    InfoIcon,
} from "lucide-react";

import { useState } from "react";
import { Link } from "@inertiajs/react";

import { FormatRupiah } from "@arismun/format-rupiah";
import DeleteData from "@/Components/DeleteData";
import Edit from "./Edit";

// import DeleteData from "@/Components/DeleteData";

export const column: ColumnDef<Game>[] = [
    {
        id: "No",
        header: "No",
        cell: (info) => info.row.index + 1,
        enableSorting: false,
        enableHiding: false,
        sortUndefined: false,
    },
    {
        accessorKey: "image",
        header: "Gambar Kostum",
        cell(props) {
            return (
                <img
                    className="size-40 rounded-xl object-cover"
                    src={`/storage/${props.row.original.image}`}
                    alt=""
                />
            );
        },
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant={"outline"}
                    size={"sm"}
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Nama Kostum
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell(props) {
            return (
                <>
                    <div className="flex items-center gap-2">
                        {props.row.original.name}
                    </div>
                </>
            );
        },
    },
    {
        accessorKey: "description",
        header: ({ column }) => {
            return (
                <Button
                    variant={"outline"}
                    size={"sm"}
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Deskripsi
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell(props) {
            return (
                <>
                    <div className="flex items-center gap-2">
                        {props.row.original.description}
                    </div>
                </>
            );
        },
    },

    {
        id: "actions",
        enableHiding: false,
        header: "Actions",
        cell: ({ row }) => {
            const game = row.original;

            return (
                <div className="flex items-center gap-2">
                    <Edit game={game} />
                    <DeleteData paramId={`/admin/game/${game.id}`} />
                </div>
            );
        },
    },
];
