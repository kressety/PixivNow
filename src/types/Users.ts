import { Artwork, ArtworkInfo } from './Artworks'

export enum UserXRestrict {
  SAFE,
  R18,
  R18G,
}
export enum UserPrivacyLevel {
  PUBLIC_FOR_ALL,
  PUBLIC_FOR_FRIENDS,
  PRIVATE,
}

export interface User {
  userId: `${number}`
  name: string
  image: string
  imageBig: string
  premium: boolean
  isFollowed: boolean
  isMypixiv: boolean
  isBlocking: boolean
  background: {
    url: string | null
    color: string | null
    repeat: string | null
    isPrivate: boolean
  } | null
  sketchLiveId: {} | null
  partial: number
  acceptRequest: boolean
  sketchLives: any[]
  following: number
  followedBack: boolean
  comment: string
  commentHtml: string
  webpage: string | null
  social: {
    twitter?: {
      url: string
    }
    facebook?: {
      url: string
    }
    instagram?: {
      url: string
    }
    [key: string]: any
  }
  region: {
    name: string
    privacyLevel: UserPrivacyLevel
  } | null
  birthDay: {
    name: string
    privacyLevel: UserPrivacyLevel
  } | null
  gender: {
    name: string
    privacyLevel: UserPrivacyLevel
  } | null
  job: {
    name: string
    privacyLevel: UserPrivacyLevel
  } | null
  workspace: {
    userWorkspacePc?: string
    userWorkspaceMonitor?: string
    userWorkspaceTool?: string
    userWorkspaceScanner?: string
    userWorkspaceTablet?: string
    userWorkspaceMouse?: string
    userWorkspacePrinter?: string
    userWorkspaceDesktop?: string
    userWorkspaceMusic?: string
    userWorkspaceDesk?: string
    userWorkspaceChair?: string
    userWorkspaceComment?: string
    wsUrl?: string
    wsBigUrl?: string
  }
  official: boolean
  group: null
  illusts: ArtworkInfo[]
  manga: ArtworkInfo[]
  novels: ArtworkInfo[]
}

export interface PixivUser {
  id: `${number}`
  pixivId: string
  name: string
  profileImg: string
  profileImgBig: string
  premium: boolean
  xRestrict: UserXRestrict
  adult: boolean
  illustCreator: boolean
  novelCreator: boolean
  hideAiWorks: boolean
  readingStatusEnabled: boolean
  illustMaskRules: any[]
  location: string
  isSensitiveViewable: boolean
}

export interface UserListItem {
  userId: `${number}`
  userName: string
  profileImageUrl: string
  userComment: string
  following: boolean
  followed: boolean
  isBlocking: boolean
  isMypixiv: boolean
  illusts: ArtworkInfo[]
  novels: any[]
  acceptRequest: boolean
}
