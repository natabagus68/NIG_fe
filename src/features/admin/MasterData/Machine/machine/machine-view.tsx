import React from "react";
import { Breadcrumbs } from "../../../../../common/components";
import { PenAltIcon, TrashIcon } from "../../../../../common/components/icons";
import Pagination from "../../../../../common/components/pagination/Pagination";
import { useMachine } from "./machine-view-model";
import ModalDelete from "@common/components/Modal/ModalDelete";

const Machine = () => {
    const machine = useMachine();
    return (
        <>
            <div>
                <Breadcrumbs items={["Machine"]} />
            </div>
            <div className="m-auto w-full border-2 border-gray-100 rounded-lg pb-6 ">
                <div className="w-full py-5 px-12 flex justify-between items-center">
                    <h1 className="font-[700] text-2xl text-gray-700 font-sans">
                        Machine.
                    </h1>
                    <button
                        className="py-[12px] px-[20px] bg-gray-600 text-white align-middle rounded-md"
                        onClick={machine.onAdd}
                    >
                        + Add Data
                    </button>
                </div>
                <div>
                    <table className="w-full">
                        <thead className="bg-[#FAFAFB] border-y-2 border-gray-100">
                            <tr>
                                <th className="py-6 text-center pl-3 text-gray-600 font-[500]">
                                    ID Machine
                                </th>
                                <th className="py-6 text-center pl-3 text-gray-600 font-[500]">
                                    No. Machine
                                </th>
                                <th className="py-6 text-center pl-3 text-gray-600 font-[500]">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {machine.machine.data.map((item) => (
                                <tr
                                    key={item.id}
                                    className="border-b-2 border-gray-100"
                                >
                                    <td className="py-6 text-center pl-3 text-gray-600 ">
                                        {item.idMachine}
                                    </td>
                                    <td className="py-6 text-center pl-3 text-gray-600 ">
                                        {item.noMachine}
                                    </td>
                                    <td className="py-6  pl-3 text-gray-600 flex gap-3 justify-center">
                                        <button
                                            onClick={(e) =>
                                                machine.onEdit(item.id)
                                            }
                                            className="py-[12px] px-[20px] bg-[#F79009] items-center rounded-md text-white flex gap-2"
                                        >
                                            <PenAltIcon />
                                            Edit
                                        </button>
                                        <button
                                            onClick={(e) =>
                                                machine.onDelete(item.id)
                                            }
                                            className="py-[12px] px-[20px] bg-[#F04438] items-center rounded-md text-white flex gap-2"
                                        >
                                            <TrashIcon />
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {machine.machine.data.length == 0 && (
                                <>
                                    <tr>
                                        <td
                                            colSpan={999}
                                            className="text-center py-4 border-b bg-gray-50 text-gray-800"
                                        >
                                            Empty
                                        </td>
                                    </tr>
                                </>
                            )}
                        </tbody>
                    </table>
                    <div className="flex items-center justify-end mt-4 px-5">
                        <Pagination
                            row={1}
                            limit={10}
                            page={machine.machine.page}
                        />
                    </div>
                </div>
            </div>
            <ModalDelete
                showModal={machine.deleteConfirmShow}
                setShowModal={machine.setDeleteConfirmShow}
                onConfirm={machine.onConfirmDelete}
            />
        </>
    );
};

export default Machine;
