interface IChannel {
    subscribe(observer: ISubscriber): void
    unsubscribe(observer: ISubscriber): void
    notify(): void
    getVideoData(): string
    uploadVideo(title: string): void
}

interface ISubscriber {
    update(channel: IChannel): void
}

class Channel implements IChannel {
    private subscribers: Set<ISubscriber> = new Set()
    public readonly name: string
    private latestVideo = ""

    constructor(name: string) {
        this.name = name
    }

    subscribe(subscriber: ISubscriber): void {
        this.subscribers.add(subscriber)
    }

    unsubscribe(subscriber: ISubscriber): void {
        this.subscribers.delete(subscriber)
    }

    notify(): void {
        for (const sub of Array.from(this.subscribers)) {
            sub.update(this)
        }
    }

    uploadVideo(title: string): void {
        this.latestVideo = title
        console.log(`${this.name} uploaded ${title}`)
        this.notify()
    }

    getVideoData(): string {
        return `Checkout our new video: ${this.latestVideo}`
    }
}

class Subscriber implements ISubscriber {
    public readonly name: string

    constructor(name: string) {
        this.name = name
    }

    update(channel: IChannel): void {
        console.log(`Hey ${this.name}, ${channel.getVideoData()}`)
    }
}

const channel: IChannel = new Channel("Varun's Tech")

const sub1 = new Subscriber("Rashmi")
const sub2 = new Subscriber("Vaibhav")

channel.subscribe(sub1)
channel.subscribe(sub2)

channel.uploadVideo("Observer pattern tutorial")

channel.unsubscribe(sub2)

channel.uploadVideo("This is the latest video")

