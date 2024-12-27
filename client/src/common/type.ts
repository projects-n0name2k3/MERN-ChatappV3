export interface IChatItem {
    id: number
    name: string
    lastMessage: string
    time: Date
    avatar: string
    unread: number
}

export interface ITypeMessage {
    type: 'all' | 'direct' | 'group'
}