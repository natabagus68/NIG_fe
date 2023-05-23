import { config } from "@common/utils";
import { AprovalReport } from "@domain/models/aproval-report";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Aproval } from "@domain/models/aproval";
import { AprovalResult } from "@domain/models/aproval-result";
import { MachineCheck } from "@domain/models/machine-check";
import { ResumeCheck } from "@domain/models/resume-check";
import { AprovalRepository } from "@domain/repositories/aproval-repository";
import { Accuracy } from "@domain/models/Accuracy";
import { AprovalApiRepository } from "@data/api/aproval-api-repository";
export const useReportDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nav, setNav] = useState(1);
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
    })
  );

  useEffect(() => {
    aprovalRepo.getReport(id).then((result) => {
      setData(result);
    });
  }, []);
  const navHandle = (val: number, nav: string) => {
    setNav(val);
    navigate(`${config.pathPrefix}admin/report/${id}/detail/${nav}`);
  };
  return {
    data,
    nav,
    navHandle,
  };
};

