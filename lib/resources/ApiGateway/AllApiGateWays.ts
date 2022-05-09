// All Api Gateways
import { WorksmanTermsAndConditionsApiGateway } from "./WorksmanTermsAndConditionsApis/WorksmanTermsAndConditionsApiGateway";
import { worksmanExperienceApiGateway } from "./worksmanExperienceApis/worksmanExperienceApiGateway";
import { PostUserApiGateway } from "./UserApis/PostUserApiGateway";
import { CreateWorksmanScheduleApiGateway } from "./ScheduleApis/CreateWorksmanScheduleApiGateway";
import { createPostcodesApiGateway } from "./PostcodesApis/createPostcodesApiGateway";
import { CreateJobsApiGateway } from "./JobsApis/CreateJobsApiGateway";
import { CreateBankDetailsApiGateway } from "./BankDetailsApis/CreateBankDetailsApiGateway";
import { CreateMessagesApiGateway } from "./MessagesApis/CreateMessagesApiGateway";
import { CreatePaymentHistoryDetailsApiGateway } from "./PaymentHistoryDetailsApis/CreatePaymentHistoryDetailsApiGateway";

// Get
import { GetTestUserApiGateway } from "./UserApis/GetTestUserApiGateway";
import { getAllMobileNumbersApiGateway } from "./WorksmanRegistrationApis/getAllMobileNumbersApiGateway";
import { GetWorksmanAccountRegistartionStatusApiGateway } from "./WorksmanRegistrationApis/GetWorksmanAccountRegistartionStatusApiGateway";
import { GetWorkmanDetailsApiGateway } from "./WorksmanRegistrationApis/GetWorkmanDetailsApiGateway";
import { GetAllPostcodesApiGateway } from "./PostcodesApis/GetAllPostcodesApiGateway";
import { GetWorksmanScheduleApiGateway } from "./ScheduleApis/GetWorksmanScheduleApiGateway";
import { GetWorksmanjobsApiGateway } from "./JobsApis/GetWorksmanjobsApiGateway";
import { GetBankDetailsApiGateway } from "./BankDetailsApis/GetBankDetailsApiGateway";
import { GetMessagesApiGateway } from "./MessagesApis/GetMessagesApiGateway";
import { GetJobsApiGateway } from "./JobsApis/GetJobsApiGateway";
import { GetPaymentDetailsApiGateway } from "./PaymentDetailsApis/GetPaymentDetailsApiGateway";
import { GetPaymentHistoryDetailsApiGateway } from "./PaymentHistoryDetailsApis/GetPaymentHistoryDetailsApiGateway";
import { GetDistrictWisePostCodesApiGateway } from "./DistrictWisePostCodesApis/GetDistrictWisePostCodesApiGateway";
import { GetListOfJobsBasedOnMonthApiGateway } from "./JobsApis/GetListOfJobsBasedOnMonthApiGateway";


//Delete
import { DeleteWorkmanScheduleApiGateway } from "./ScheduleApis/DeleteWorkmanScheduleApiGateway";
import { DeletePostcodesApiGateway } from "./PostcodesApis/DeletePostcodesApiGateway";

//Update
import { UpdateWorksmanDetailsApiGateway } from "./WorksmanRegistrationApis/UpdateWorksmanDetailsApiGateway";
import { UpdateBankDetailsApiGateway } from "./BankDetailsApis/UpdateBankDetailsApiGateway";


export {
  WorksmanTermsAndConditionsApiGateway,
  worksmanExperienceApiGateway,
  PostUserApiGateway,
  CreateWorksmanScheduleApiGateway,
  createPostcodesApiGateway,
  CreateJobsApiGateway,
  CreateBankDetailsApiGateway,
  CreateMessagesApiGateway,
  CreatePaymentHistoryDetailsApiGateway,
  GetTestUserApiGateway,
  getAllMobileNumbersApiGateway,
  GetWorksmanAccountRegistartionStatusApiGateway,
  GetWorkmanDetailsApiGateway,
  GetAllPostcodesApiGateway,
  GetWorksmanScheduleApiGateway,
  GetWorksmanjobsApiGateway,
  GetBankDetailsApiGateway,
  GetMessagesApiGateway,
  GetJobsApiGateway,
  GetPaymentDetailsApiGateway,
  GetPaymentHistoryDetailsApiGateway,
  GetDistrictWisePostCodesApiGateway,
  GetListOfJobsBasedOnMonthApiGateway,
  DeleteWorkmanScheduleApiGateway,
  DeletePostcodesApiGateway,
  UpdateWorksmanDetailsApiGateway,
  UpdateBankDetailsApiGateway
};
