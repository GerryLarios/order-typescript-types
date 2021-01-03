export type AccountExecutive = {
  aeEmail: string
  aeFirstName: string
  aeLastName: string
  aeNmls: string
  aePhone: string
}

export type Applicant = {
  id: string
  firstName: string
  middleName: string
  lastName: string
  genaration: string
  dateOfBirth: string
  email: string
  phoneNumber: number
  maritalStatus: string
  creditScore: string
  backendDti: string
  frontendDti: string
}

export type Condition = {
  id: string
  state: string
  archived?: boolean
  createdAt?: string
  updatedAt?: string
  conversation: Conversation
  documentType: Partial<DocumentType>
  notes: {
    edges: Array<{ node: Note }>
  }
  conditionFiles: {
    edges: Array<{ node: ConditionFile }>
  }
  transactionAssignments: {
    edges: Array<{ node: TransactionAssignment }>
  }
}

export type ConditionFile = {
  id: string
  fileName: string
  fileSize: number
  shortUrl: string
  notes: string[]
  fileType: string
  archived: boolean
  deleted: boolean
  state: string
  uploadedById: string
  successfulProcessing: boolean
  pages: {
    edges: Array<{ node: Page }>
  }
}

export type Conversation = {
  id: string
  messages: {
    edges: Array<{ node: Messages }>
  }
}

export type DocumentType = {
  id: string
  displayName: string
  helpTextMlo: string
  helpTextBorrower: string
  docType: string
  order: number
  deleted: boolean
  tags: {
    edges: Array<{ node: DocumentTypeTag }>
  }
  validations: {
    edges: Array<{ node: Validation }>
  }
}

export type DocumentTypeTag = {
  id: string
  displayName: string
}

export type Lender = {
  id: string
  name: string
  website: string
  nmls: string
  brokerId: string
  relationshipTypes: string[]
}

export type LenderAccount = {
  lenderName: string
  lenderNmls: string
  lenderBrokerId: string
  lenderWebsite: string
  lenderRelationshipTypes: string | string[]
}

export type Lenders = {
  edges: Array<{ node: LendingAccount }>
}

export type LendingAccount = {
  id: string
  accountExecutive: Partial<User>
  lender: Lender
}

export type LoanProgram = {
  id: string
  name: string
  description: string
  deleted: boolean
}

export type MessageAuthor = {
  firstName: string
  lastName: string
  id: string
}

export type Messages = {
  id: string
  content: string
  conversationId: string
  createdAt: string
  deleted: boolean
  author: MessageAuthor
}

export type Note = {
  id: string
  body: string
}

export type Organization = {
  id: string
  name: string
  nmls: string
  phone: string
  states: string[]
  licensedPrograms: string[]
  logoUrl?: string
}

export type Page = {
  id: string
  thumbUrl: string
  largeUrl: string
  deleted: boolean
}

export type PaymentMethod = {
  paymentMethodId: string
  planId: string
  customerId: string
  canEdit: boolean
  editForm: boolean
  card: {
    last4: string
    brand: string
    expMonth: string
    expYear: string
    ccv: string
  }
  billingDetails: {
    name: string
    address: {
      postalCode: string
    }
  }
}

export type RequireConditionsPermissions = {
  roleCodes: string[]
  readOnly: boolean
}

export type Role = {
  id: string
  name: string
  code: string
  isSysAdmin: boolean
}

export type Transaction = {
  id: string
  state: string
  title: string
  propertyAddress: string
  propertyCity: string
  propertyState: string
  propertyZip: string
  loanPurpose: string
  loanAmount: number
  loanProgram: LoanProgram
  loanRate: number
  loanToValue: number
  combinedLoanToValue: number
  estimatedLoanValue: number
  numberOfUnits: number
  propertyType: string
  occupancyType: string
  transactionType: TransactionType
  createdBy: {
    id: string
    firstName: string
    email: string
    lastName: string
    nmls: string
    officePhone: string
    derivedCompany: string
    organization: {
      id: string
      name: string
      nmls: string
      logoUrl: string
      phone: string
      streetAddress: string
      city: string
      state: string
      zip: string
    }
  }
  mortgageType: string
  emailTemplates: {
    borrowerSubject: string
    borrowerRaw: string
    borrowerHtml: string
  }
  loanApplicants: {
    edges: Array<{ node: Applicant }>
  }
  conditions: {
    edges: Array<unknown>
  }
  createdAt: Date
  updatedAt: Date
}

export type TransactionAssignment = {
  id: string
  readOnly: boolean
  deleted: boolean
  assignedTo: Partial<User>
}

export type TransactionType = {
  id: string
  code: string
  name: string
}

export type UpdateOrganizationRequest = Organization

export type UpdateUserProfileRequest = {
  firstName: string
  lastName: string
  mobilePhone: string
  officePhone: string
  licensedPrograms: string[]
  states: string[]
  nmls: string
}

export type User = {
  id: string
  email: string
  firstName: string
  lastName: string
  mobilePhone: string
  officePhone: string
  licensedPrograms: string[]
  states: string[]
  role: Role
  nmls: string
  avatar: string
  organization: Organization
  lendingAccounts: Lenders
  companyLogo: string
  thirdPartyCompany: string
  isOfficeUser?: boolean
  isBorrowerUser?: boolean
  isThirdPartyUser?: boolean
  billing: {
    subscriptionId: string
    paymentMethodId: string
    customerId: string
    planId: string
  }
}

export type UserProfile = {
  id: string
  email: string
  firstName: string
  lastName: string
  mobilePhone: string
  officePhone: string
  licensedPrograms: string[]
  states: string[]
  role: string
  nmls: string
  avatar: string
  isSysAdmin: boolean
  companyLogo: string
  isOfficeUser?: boolean
  isBorrowerUser?: boolean
  isThirdPartyUser?: boolean
}

export type Validation = {
  id: string
  displayName: string
  isForMlo: string
  order: string
  deleted: string
}

