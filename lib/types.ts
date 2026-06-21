export interface Temple {
  name: string
  icon: string
  description: string
  summerTiming: string
  winterTiming?: string
  entryFee: string
  badge?: string
}

export interface InfoItem {
  label: string
  value: string
  note: string
}

export interface Place {
  id: string
  name: string
  nameEn: string
  icon: string
  badge: string
  distanceFromMathura: string
  travelTime: string
  heroTagline: string
  intro: string
  bgGradient: string
  temples: Temple[]
  infoItems: InfoItem[]
  cardTags: string[]
  cardDesc: string
}

export interface Festival {
  name: string
  icon: string
  description: string
  month: string
  location: string
}
