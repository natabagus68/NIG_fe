import { AprovalApiRepository } from "@data/api/aproval-api-repository";
import { Accuracy } from "@domain/models/Accuracy";
import { Aproval } from "@domain/models/aproval";
import { AprovalReport } from "@domain/models/aproval-report";
import { AprovalResult } from "@domain/models/aproval-result";
import { InspectionResult } from "@domain/models/inspection-result";
import { MachineCheck } from "@domain/models/machine-check";
import { ResumeCheck } from "@domain/models/resume-check";
import { AprovalRepository } from "@domain/repositories/aproval-repository";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

interface Menu {
  id: number;
  label: string;
  to: string;
}

export default function useApprovalModel() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);

  const [menu, setMenu] = useState<Menu[]>([]);
  const [open, setOpen] = useState(false);
  const aprovalRepo: AprovalRepository = new AprovalApiRepository();
  const [data, setData] = useState<AprovalReport>(
    AprovalReport.create({
      id: "",
      aproval: Aproval.create({
        inspectionID: "",
        inspectionDate: "",
        customer: "",
        status: "",
        confirmation: "",
        inspector: "",
        machineName: "",
      }),
      aprovalResult: AprovalResult.create({
        machineType: "",
        serial: "",
        MFGDate: "",
        capasity: "",
        st: "",
        stPerminutes: "",
        dHeightt: "",
        adjustment: "",
        bloasterX: "",
        bloasterY: "",
        areaSlideX: "",
        areaSlideY: "",
      }),
      inspectionForm: [],
      machineCheck: MachineCheck.create({
        id: "",
        slideDiam: 0,
        slideBergerak: 0,
        noMainMotor: 0,
        running: "",
        clearence: "",
        actual: "",
        result: "",
        adjustUp: "",
        adjustDown: "",
        tmb: "",
        point: "",
        test1: "",
        test2: "",
        test3: "",
        test4: "",
        test5: "",
        test6: "",
        test7: "",
        test8: "",
        test9: "",
        test10: "",
      }),
      accuracyCheck: Accuracy.create({
        id: "",
        generalDataId: "",
        unit: 0,
        balancerAirPsr: 0,
        prlAdj_0A: 0,
        prlAdj_0B: 0,
        prlAdj_0C: 0,
        prlAdj_0D: 0,
        prlAdj_180A: 0,
        prlAdj_180B: 0,
        prlAdj_180C: 0,
        prlAdj_180D: 0,
        prlActVlv: 0,
        prlAllowance: 0,
        prlJudgement: "",
        gibAdj_0A: 0,
        gibAdj_0B: 0,
        gibAdj_0C: 0,
        gibAdj_0D: 0,
        gibAdj_180A: 0,
        gibAdj_180B: 0,
        gibAdj_180C: 0,
        gibAdj_180D: 0,
        gibActVlv: 0,
        gibAllowance: 0,
        gibJudgement: "",
        ppdcltSlideStroke: 0,
        ppdcltAdjLrA: 0,
        ppdcltAdjLrB: 0,
        ppdcltAdjLrC: 0,
        ppdcltAdjLrD: 0,
        ppdcltAdjFrA: 0,
        ppdcltAdjFrB: 0,
        ppdcltAdjFrC: 0,
        ppdcltAdjFrD: 0,
        ppdcltLrActValue: 0,
        ppdcltLrAllowance: 0,
        ppdcltLrJudgement: "",
        ppdcltFrActValue: 0,
        ppdcltFrAllowance: 0,
        ppdcltFrJudgement: "",
        ttlClrActValue: 0,
        ttlClrActValve: 0,
        ttlClrAllowance: 0,
        ttlClrJudgement: "",
      }),
      loadTonnage: [],
      resume: ResumeCheck.create({
        id: "",
        notes: "",
        recommendation: "",
      }),
      inspection: InspectionResult.create({
        id: "",
        color: "",
        desc: "",
        opt: "",
      }),
    })
  );
  useEffect(() => {
    setMenu([
      { id: 1, label: "Inspection Form", to: "" },
      { id: 2, label: "Machine Check", to: "machinecheck-view" },
      { id: 3, label: "Accuracy Check", to: "accuracycheck-view" },
      {
        id: 4,
        label: "Check Load Tonnage",
        to: "checkloadtonnage/tonnage-view",
      },
      { id: 5, label: "Resume Check", to: "checkresume/resume-view" },
    ]);
  }, []);

  const closeChooseInspection = () => {
    setOpen(false);
  };

  const openChooseInspection = () => {
    setOpen(true);
  };
  const pageBack = (): void => {
    navigate("../");
  };

  const handleSetNav = () => {
    setNav(true);
  };

  const handleConfirmation = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const fetchData = () => {
    aprovalRepo.getReport(id).then((result) => {
      setData(result);
    });
  };

  const onConfirm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    await aprovalRepo.putconfirm(id);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Confirm",
      showConfirmButton: false,
      timer: 1500,
    });
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    menu,
    setMenu,
    nav,
    setNav,
    open,
    setOpen,
    pageBack,
    handleSetNav,
    handleConfirmation,
    closeChooseInspection,
    openChooseInspection,
    onConfirm,
    fetchData,
  };
}
