import { Breadcrumbs } from "@common/components";
import ArrowUpIcon from "@common/components/icons-new/ArrowUpIcon";
import ConfirmIcon from "@common/components/icons-new/ConfirmIcon";
import DocumentIcon from "@common/components/icons-new/DocumentIcon";
import SearchIcon from "@common/components/icons-new/SearchIcon";
import SortIcon from "@common/components/icons-new/SortIcon";
import useList from "./list-model";

const ListView = () => {
  const approval = useList();

  return (
    <main className="flex flex-col gap-[28px] justify-between">
      <Breadcrumbs items={["Approval"]} />
      <div className="rounded-md border border-[#D0D3D9] bg-white">
        <div className="w-full flex items-center justify-between py-[18px] px-[32px] border-b border-[#D0D3D9]">
          <div className="flex w-full justify-between items-center">
            <span className="text-2xl text-[#514E4E] font-bold ">
              Report Document
            </span>

            <div className="flex gap-4">
              <div className="w-[200px] relative">
                <div className="absolute top-1/2 pl-4 pr-2 fill-slate-400 -translate-y-1/2  z-30">
                  <SortIcon className="w-[18px] h-[18px]" color="#231F20" />
                </div>
                <select
                  onChange={approval?.handleSelectTermChange}
                  className="h-[48px] w-full bg-white text-[#231F20] rounded-md pr-2 pl-10 border border-[#B8B6B6]"
                >
                  <option value="all">
                    <div className="py-3 mb-3">All Status</div>
                  </option>
                  <option value="waiting">
                    <span className="py-3">Waiting</span>
                  </option>
                  <option value="confirmed">
                    <span className="py-3">Confirmed</span>
                  </option>
                </select>
              </div>
              <div className=" h-fit relative">
                <div className="absolute top-1/2 pl-4 pr-2 fill-slate-400 -translate-y-1/2  z-30">
                  <SearchIcon className="w-4 h-4" color="#B8B6B6" />
                </div>
                <input
                  type="text"
                  value={approval?.searchTerm}
                  onChange={approval?.handleSearchTermChange}
                  className="h-[48px] border border-[#B8B6B6] rounded-md pl-10 py-3 bg-white"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
        </div>

        <table className="w-full">
          <thead className="bg-[#FAFAFB] border-b border-[#D0D3D9] h-[64px] text-sm text-[#514E4E] font-semibold">
            <tr>
              <th className="px-[32px] text-start">Inspection ID</th>
              <th className="px-[32px] text-start">Inspection Date</th>
              <th className="px-[32px] text-start">Customer</th>
              <th className="px-[32px] text-start">Machine Name</th>
              <th className="px-[32px] text-start">Status</th>
              <th className="px-[32px] text-start">Action</th>
            </tr>
          </thead>
          <tbody className="text-base text-[#514E4E]">
            {approval?.searchTerm !== "" || approval?.selectTerm !== "all"
              ? approval?.filteredItems.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-[#D0D3D9] h-[64px]"
                  >
                    <td className="px-[32px]">{item.id}</td>
                    <td className="px-[32px]">{item.date}</td>
                    <td className="px-[32px]">{item.customer}</td>
                    <td className="px-[32px]">{item.machine}</td>
                    <td className="px-[32px]">
                      <div
                        className={` ${
                          item.status === "Confirmed"
                            ? "bg-[#4D74B2]"
                            : "bg-[#F9A63A]"
                        }  w-[112px] px-4 py-1 rounded-full`}
                      >
                        <span className="text-white w-full inline-block text-center text-base font-normal">
                          {item.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-[32px]">
                      <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 h-[46px] px-[20px] bg-[#1BBDD4] rounded">
                          <DocumentIcon />
                          <span className="text-white text-sm font-semibold ">
                            Review
                          </span>
                        </button>
                        {item.status === "Waiting" && (
                          <button
                            className="flex items-center gap-2 border-[1px] border-[#4D74B2] h-[46px] px-[20px] bg-white rounded"
                            onClick={() => approval?.handleConfirm(item)}
                          >
                            <ConfirmIcon color="#4D74B2" />
                            <span className="text-[#4D74B2] text-sm font-semibold">
                              Confirm
                            </span>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              : approval?.dataApproval.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-[#D0D3D9] h-[64px]"
                  >
                    <td className="px-[32px]">{item.id}</td>
                    <td className="px-[32px]">{item.date}</td>
                    <td className="px-[32px]">{item.customer}</td>
                    <td className="px-[32px]">{item.machine}</td>
                    <td className="px-[32px]">
                      <div
                        className={` ${
                          item.status === "Confirmed"
                            ? "bg-[#4D74B2]"
                            : "bg-[#F9A63A]"
                        }  w-[112px] px-4 py-1 rounded-full`}
                      >
                        <span className="text-white w-full inline-block text-center text-base font-normal">
                          {item.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-[32px]">
                      <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 h-[46px] px-[20px] bg-[#1BBDD4] rounded">
                          <DocumentIcon color="white" />
                          <span className="text-white text-sm font-semibold ">
                            Review
                          </span>
                        </button>
                        {item.status === "Waiting" && (
                          <button
                            className="flex items-center gap-2 border-[1px] border-[#4D74B2] h-[46px] px-[20px] bg-white rounded"
                            onClick={() => approval?.handleConfirm(item)}
                          >
                            <ConfirmIcon color="#4D74B2" />
                            <span className="text-[#4D74B2] text-sm font-semibold">
                              Confirm
                            </span>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>

        <div className="flex py-4 px-[32px] justify-end gap-4">
          <button className="px-4 h-[40px] text-[#B8B6B6] border gap-2 border-[#B8B6B6] rounded flex items-center justify-center">
            <ArrowUpIcon
              className="w-[16px] h-[16px] -rotate-90"
              color="#B8B6B6"
            />
            <span>Prev</span>
          </button>
          <div className="w-[40px] h-[40px] bg-[#20519F] rounded flex items-center justify-center text-white">
            1
          </div>
          <button className="px-4 h-[40px] text-[#20519F] border gap-2 border-[#20519F] rounded flex items-center justify-center">
            <span>Next</span>
            <ArrowUpIcon
              className="w-[16px] h-[16px] rotate-90"
              color="#20519F"
            />
          </button>
        </div>
      </div>
    </main>
  );
};

export default ListView;