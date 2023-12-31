import { Breadcrumbs } from "@common/components";
import EditIcon from "@common/components/icons-new/EditIcon";
import ModalDelete from "@common/components/modals/ModalDelete";
import TrashIcon from "@common/components/icons-new/TrashIcon";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import SearchIcon from "@common/components/icons-new/SearchIcon";
import EyeShowIcon from "@common/components/icons-new/EyeShowIcon";
import LoadingIcon from "@common/components/icons-new/LoadingIcon";
import useCustomerModal from "./customer-model";

export default function MasterDataView() {
  const data = useCustomerModal();
  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs items={["Master Data"]} />
      <div className="rounded-md border bg-[#FFFFFF]">
        <div className="flex justify-between items-center border-b rounded-md">
          <h1 className="text-2xl px-6 py-8 font-[700]">Master Data</h1>
          <div className="flex gap-4 relative">
            <SearchIcon className="absolute top-4 left-4" color={"#B8B6B6"} />
            <input
              className="pl-10 py-[6px] font-[400] rounded-md border px-[14px] focus:border-2 focus:outline-none focus:border-[#14988B]"
              placeholder="Search"
            />
            <button
              className="px-5 py-3 rounded mr-6 bg-[#14988B] text-[#FFFFFF]"
              onClick={() => data.addCustomer()}
            >
              + Add Data
            </button>
          </div>
        </div>
        {data.loading ? (
          <div className="h-[500px] flex items-center justify-center">
            <LoadingIcon className="w-[24px] h-[24px] animate-spin" />
          </div>
        ) : (
          <>
            <table className="w-full">
              <thead className="text-sm font-semibold border-b h-[64px] border-[#D0D3D9] text-[#514E4E]">
                <tr>
                  <th className="px-[32px] text-start font-[600]">
                    Customer ID
                  </th>
                  <th className="px-[16px] text-start font-[600]">
                    Customer Name
                  </th>
                  <th className="px-[16px] text-start font-[600]">Address</th>
                  <th className="px-[16px] text-start font-[600]">Telp/Fax</th>
                  <th className="px-[32px] text-start font-[600]">Action</th>
                </tr>
              </thead>
              <tbody>
                {data?.customer.map((item) => (
                  <tr
                    key={item?.id}
                    className="border-b h-[64px] border-[#D0D3D9] font-[400] text-[16px]"
                  >
                    <td className="px-[32px]">{item?.customerId}</td>
                    <td className="px-[16px]">{item?.name}</td>
                    <td className="px-[16px]">{item?.address}</td>
                    <td className="px-[16px]">{item?.phone}</td>
                    <td className="px-[32px] flex gap-3 my-2 justify-center">
                      <div
                        className="p-2 rounded text-sm flex items-center gap-2 cursor-pointer justify-center w-[48px] h-[48px] bg-[#1BBDD4]"
                        onClick={() => data.detailCustomer(item?.id)}
                      >
                        <EyeShowIcon />
                      </div>
                      <div
                        className="p-2 rounded text-sm flex items-center gap-2 cursor-pointer justify-center w-[48px] h-[48px] bg-[#F79009]"
                        onClick={() => data.editCustomer(item?.id)}
                      >
                        <EditIcon />
                      </div>
                      <div
                        className="p-2 rounded text-sm flex items-center gap-2 cursor-pointer justify-center w-[48px] h-[48px] bg-[#F04438]"
                        onClick={() => data.setSelected(item?.id)}
                      >
                        <TrashIcon />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex py-4 px-[32px] justify-end gap-4 bg-[#FFFFFF]">
              <button className="px-4 h-[40px] text-[#B8B6B6] border gap-2 border-[#B8B6B6] rounded flex items-center justify-center">
                <ArrowUpIcon
                  className="w-[16px] h-[16px] -rotate-90"
                  color="#B8B6B6"
                />
                <span>Prev</span>
              </button>
              <div className="w-[40px] h-[40px] bg-[#14988B] rounded flex items-center justify-center text-white">
                1
              </div>
              <div className="w-[40px] h-[40px] bg-[#FFFFFF] rounded flex items-center justify-center text-[#514E4E]">
                2
              </div>
              <div className="w-[40px] h-[40px] bg-[#FFFFFF] rounded flex items-center justify-center text-[#514E4E]">
                3
              </div>
              <div className="w-[40px] h-[40px] bg-[#FFFFFF] rounded flex items-center justify-center text-[#514E4E]">
                ...
              </div>
              <div className="w-[40px] h-[40px] bg-[#FFFFFF] rounded flex items-center justify-center text-[#514E4E]">
                10
              </div>
              <button className="px-4 h-[40px] text-[#FFFFFF] border gap-2 border-[#14988B] rounded flex items-center justify-center">
                <span className="text-[#514E4E]">Next</span>
                <ArrowUpIcon
                  className="w-[16px] h-[16px] rotate-90"
                  color="#14988B"
                />
              </button>
            </div>
          </>
        )}
      </div>
      <ModalDelete
        open={data.open}
        setOpen={data.setOpen}
        setOpenConfirm={data.onDelete}
      />
    </main>
  );
}
