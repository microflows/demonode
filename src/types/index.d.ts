export default interface mfNode {
    proto: object
    name: string
    version: string
    urls: Array<string>
    author: string
    email: string
    description: string
    icon: string
    categories: Array<string>
    resources: object
    init(): void
    instance(): any
}
