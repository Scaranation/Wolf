import { ColumnDef } from "@tanstack/react-table";
import { Game, JockeyProduct, TopupProduct } from "@/types";
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

export const column: ColumnDef<JockeyProduct>[] = [
    {
        id: "No",
        header: "No",
        cell: (info) => info.row.index + 1,
        enableSorting: false,
        enableHiding: false,
        sortUndefined: false,
    },
    {
        accessorKey: "game.name",
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
                    <div className="flex items-center gap-4">
                        <img
                            src={`/storage/${props.row.original.game.image}`}
                            className="size-10 rounded-full object-cover"
                            alt=""
                        />
                        <span>{props.row.original.game.name}</span>
                    </div>
                </>
            );
        },
    },
    {
        accessorKey: "product_name",
        header: ({ column }) => {
            return (
                <Button
                    variant={"outline"}
                    size={"sm"}
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Size
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell(props) {
            return (
                <>
                    <div className="flex items-center gap-2">
                        {props.row.original.product_name}
                    </div>
                </>
            );
        },
    },
    {
        accessorKey: "price",
        header: ({ column }) => {
            return (
                <Button
                    variant={"outline"}
                    size={"sm"}
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Harga
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell(props) {
            return (
                <>
                    <div className="flex items-center gap-2">
                        <FormatRupiah value={props.row.original.price} />
                    </div>
                </>
            );
        },
    },
    {
        accessorKey: "details",
        header: ({ column }) => {
            return (
                <Button
                    variant={"outline"}
                    size={"sm"}
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Detail
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell(props) {
            return (
                <>
                    <div className="flex items-center gap-2">
                        {props.row.original.details}
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
            const joki = row.original;

            return (
                <div className="flex items-center gap-2">
                    <Edit joki={joki} />
                    <DeleteData paramId={`/admin/jasa-joki/${joki.id}`} />
                </div>
            );
        },
    },
];
