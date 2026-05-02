import { ShieldCheck, CalendarCheck2, MapPinned, Users2 } from 'lucide-react';

export default function TrustBadges() {
    const stats = [
        {
            label: "Verified Tutors",
            value: "580",
            suffix: "+",
            subtext: "ID & Degree Verified",
            icon: ShieldCheck,
            color: "text-primary-600",
            bg: "bg-primary-50"
        },
        {
            label: "Trial Classes",
            value: "Daily",
            suffix: "",
            subtext: "Free Demo Available",
            icon: CalendarCheck2,
            color: "text-primary-600",
            bg: "bg-primary-50"
        },
        {
            label: "Bhopal Localities",
            value: "32",
            suffix: "+",
            subtext: "Every Corner Covered",
            icon: MapPinned,
            color: "text-primary-600",
            bg: "bg-primary-50"
        },
        {
            label: "Parent Reviews",
            value: "1.2k",
            suffix: "+",
            subtext: "4.9/5 Avg. Rating",
            icon: Users2,
            color: "text-primary-600",
            bg: "bg-primary-50"
        },
    ];

    return (
        <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-100 bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
                {stats.map((stat, i) => (
                    <div key={i} className="group p-8 lg:p-10 hover:bg-slate-50/50 transition-colors duration-500 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                            <stat.icon className="w-7 h-7" strokeWidth={2.5} />
                        </div>

                        <div className="space-y-1">
                            <div className="flex items-baseline justify-center lg:justify-start gap-0.5">
                                <span className="text-4xl font-display font-black text-slate-900 tracking-tight leading-none">
                                    {stat.value}
                                </span>
                                <span className={`text-2xl font-black ${stat.color}`}>
                                    {stat.suffix}
                                </span>
                            </div>

                            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest pt-1">
                                {stat.label}
                            </h3>

                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest opacity-80">
                                {stat.subtext}
                            </p>
                        </div>

                        {/* Subtle progress/decorative line */}
                        <div className="mt-6 w-8 h-1 bg-slate-100 rounded-full overflow-hidden">
                            <div className={`h-full ${stat.bg.replace('50', '500')} w-0 group-hover:w-full transition-all duration-700 delay-100`}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
