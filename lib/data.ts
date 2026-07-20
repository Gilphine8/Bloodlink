export const BLOOD_TYPES = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"] as const
export type BloodType = (typeof BLOOD_TYPES)[number]

export const COUNTIES = [
  "Nairobi",
  "Mombasa",
  "Kisumu",
  "Nakuru",
  "Uasin Gishu",
  "Kiambu",
  "Machakos",
] as const

export type SupplyStatus = "Critical Shortage" | "Low" | "Stable" | "Well Stocked"

export type BloodRequest = {
  id: string
  patientId: string
  bloodType: BloodType
  hospital: string
  county: string
  units: number
  urgency: "Critical" | "Urgent" | "Standard"
  postedAgo: string
}

export const HOSPITALS = [
  "Kenyatta National Hospital",
  "Aga Khan University Hospital",
  "Nairobi Hospital",
  "Moi Teaching & Referral Hospital",
  "Coast General Hospital",
  "Jaramogi Oginga Odinga Hospital",
] as const

export const BLOOD_REQUESTS: BloodRequest[] = [
  {
    id: "req-001",
    patientId: "PT-48213",
    bloodType: "O-",
    hospital: "Kenyatta National Hospital",
    county: "Nairobi",
    units: 3,
    urgency: "Critical",
    postedAgo: "12 min ago",
  },
  {
    id: "req-002",
    patientId: "PT-48219",
    bloodType: "A+",
    hospital: "Aga Khan University Hospital",
    county: "Nairobi",
    units: 2,
    urgency: "Urgent",
    postedAgo: "38 min ago",
  },
  {
    id: "req-003",
    patientId: "PT-48225",
    bloodType: "B+",
    hospital: "Coast General Hospital",
    county: "Mombasa",
    units: 1,
    urgency: "Standard",
    postedAgo: "1 hr ago",
  },
  {
    id: "req-004",
    patientId: "PT-48231",
    bloodType: "AB-",
    hospital: "Moi Teaching & Referral Hospital",
    county: "Uasin Gishu",
    units: 4,
    urgency: "Critical",
    postedAgo: "1 hr ago",
  },
  {
    id: "req-005",
    patientId: "PT-48240",
    bloodType: "O+",
    hospital: "Jaramogi Oginga Odinga Hospital",
    county: "Kisumu",
    units: 2,
    urgency: "Urgent",
    postedAgo: "2 hr ago",
  },
  {
    id: "req-006",
    patientId: "PT-48256",
    bloodType: "A-",
    hospital: "Nairobi Hospital",
    county: "Nairobi",
    units: 1,
    urgency: "Standard",
    postedAgo: "3 hr ago",
  },
  {
    id: "req-007",
    patientId: "PT-48261",
    bloodType: "O-",
    hospital: "Coast General Hospital",
    county: "Mombasa",
    units: 5,
    urgency: "Critical",
    postedAgo: "3 hr ago",
  },
  {
    id: "req-008",
    patientId: "PT-48277",
    bloodType: "B-",
    hospital: "Aga Khan University Hospital",
    county: "Nairobi",
    units: 2,
    urgency: "Urgent",
    postedAgo: "4 hr ago",
  },
  {
    id: "req-009",
    patientId: "PT-48283",
    bloodType: "AB+",
    hospital: "Moi Teaching & Referral Hospital",
    county: "Uasin Gishu",
    units: 1,
    urgency: "Standard",
    postedAgo: "5 hr ago",
  },
]

export type Hospital = {
  id: string
  name: string
  county: string
  city: string
  phone: string
  email: string
  status: SupplyStatus
}

export const HOSPITAL_DIRECTORY: Hospital[] = [
  {
    id: "h-01",
    name: "Kenyatta National Hospital",
    county: "Nairobi",
    city: "Upper Hill, Nairobi",
    phone: "+254 20 2726300",
    email: "bloodbank@knh.or.ke",
    status: "Critical Shortage",
  },
  {
    id: "h-02",
    name: "Aga Khan University Hospital",
    county: "Nairobi",
    city: "Parklands, Nairobi",
    phone: "+254 20 3662000",
    email: "transfusion@aku.edu",
    status: "Stable",
  },
  {
    id: "h-03",
    name: "Nairobi Hospital",
    county: "Nairobi",
    city: "Argwings Kodhek Rd, Nairobi",
    phone: "+254 20 2845000",
    email: "bloodbank@nbihosp.org",
    status: "Well Stocked",
  },
  {
    id: "h-04",
    name: "Moi Teaching & Referral Hospital",
    county: "Uasin Gishu",
    city: "Nandi Rd, Eldoret",
    phone: "+254 53 2033471",
    email: "blood@mtrh.go.ke",
    status: "Low",
  },
  {
    id: "h-05",
    name: "Coast General Teaching Hospital",
    county: "Mombasa",
    city: "Kisauni Rd, Mombasa",
    phone: "+254 41 2314204",
    email: "transfusion@cgh.go.ke",
    status: "Critical Shortage",
  },
  {
    id: "h-06",
    name: "Jaramogi Oginga Odinga Hospital",
    county: "Kisumu",
    city: "Kakamega Rd, Kisumu",
    phone: "+254 57 2020801",
    email: "bloodbank@joothr.go.ke",
    status: "Stable",
  },
  {
    id: "h-07",
    name: "Nakuru Level 5 Hospital",
    county: "Nakuru",
    city: "Kenyatta Ave, Nakuru",
    phone: "+254 51 2214201",
    email: "blood@nakuruhospital.go.ke",
    status: "Low",
  },
  {
    id: "h-08",
    name: "Kiambu Level 5 Hospital",
    county: "Kiambu",
    city: "Hospital Rd, Kiambu",
    phone: "+254 66 2022057",
    email: "transfusion@kiambuhospital.go.ke",
    status: "Well Stocked",
  },
]
