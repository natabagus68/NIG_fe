import useResumeCheck from "@features/admin/approval/checkresume/resume-model";
import ShowPreviewResume from "../popup/show-preview/showpreview-view";
import moment from "moment";

export default function ResumeView() {
  const resume = useResumeCheck();
  return (
    <div className="grid grid-cols-3 gap-6 p-6 text-[#6F6C6C]">
      <div>
        <div className="flex justify-between mb-4">
          <h1>Foto</h1>
          <h1
            className="text-[#14988B] underline cursor-pointer font-[600]"
            onClick={() => resume.handlePreview()}
          >
            Lihat
          </h1>
        </div>
        {/* <img className="min-w-[200px] min-h-[200px]" src={Robot} alt="robot" />  */}
      </div>
      <div className="flex flex-col gap-6">
        <h1>Tanggal Check</h1>
        <h1>Catatan</h1>
        <h1>Rekomendasi</h1>
      </div>
      <div className="flex flex-col gap-6">
        <h1>{moment().format("L")}</h1>
        <h1>{resume.data.resume.notes}</h1>
        <h1>{resume.data.resume.recommendation}</h1>
      </div>
      <ShowPreviewResume
        open={resume.open}
        setOpen={resume.setOpen}
        setClose={() => resume.handleClose()}
      />
    </div>
  );
}
