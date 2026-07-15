import { Mail, PhoneCall, ChatBubble, MapPin } from "@/components/common/NavIcons";

const cards = [
    {
        icon: <Mail />,
        title: "Email",
        value: "hello@zafir360.com",
        href: "mailto:hello@zafir360.com",
        note: "Replies within 4 hours",
    },
    {
        icon: <PhoneCall />,
        title: "Phone",
        value: "+964 770 000 0360",
        href: "tel:+9647700000360",
        note: "Sun–Thu, 9am–6pm Baghdad",
    },
    {
        icon: <ChatBubble />,
        title: "WhatsApp",
        value: "+964 770 000 0360",
        href: "https://wa.me/9647700000360",
        note: "Quick support for sellers",
    },
    {
        icon: <MapPin />,
        title: "HQ Baghdad",
        value: "Mansour, Baghdad, Iraq",
        href: "https://maps.google.com/?q=Mansour,Baghdad,Iraq",
        note: "By appointment only",
    },
]

export default function ContactCards() {
    return (
        <section className="py-14">
            <div className="max-w-[1180px] mx-auto px-4 sm:px-7">
                <div className="gap-px border border-[#F0EADB] rounded-[10px] overflow-hidden bg-[#F0EADB] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {cards.map((c) => (
                        <a
                            key={c.title}
                            href={c.href}
                            target={c.href.startsWith("http") ? "_blank" : undefined}
                            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="bg-white p-6 text-center no-underline text-inherit hover:bg-[#F0EADB] transition-colors duration-150"
                        >
                            <div className="w-14 h-14 rounded-[14px] bg-[#F0EADB] text-[#234A3A] flex items-center justify-center text-[1.6rem] mx-auto mb-[14px] shrink-0">
                                {c.icon}
                            </div>
                            <h3 className="font-bold text-[1rem] mb-[4px]">{c.title}</h3>
                            <p className="text-[0.92rem] text-[#0E241C]">{c.value}</p>
                            <p className="text-[0.78rem] text-[#1C2420] mt-[6px]">{c.note}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
