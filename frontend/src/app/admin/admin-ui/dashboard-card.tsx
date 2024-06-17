import { Typography } from "@material-tailwind/react";

export interface CardDashboardProps {
    title: string;
    subtitle: string;
    icon: string;
    color: string;
    amount: number;
    difference: number;
    currency?: string;
}

export const CardDashboardSingle: React.FC<CardDashboardProps> = ({ title, subtitle, icon, color, amount, difference, currency }) => {
    return (
        <div className={`flex flex-col w-80 bg-${color}-200 border-2 border-gray-100 rounded-xl p-4 shadow-lg text-gray-900 justify-center items-start`}>
            <Typography variant="lead" className="text-gray-600">{title}</Typography>
            <Typography variant="h1" className="">{`${currency}${amount}`}</Typography>
            <Typography variant="lead" className=" text-gray-600">
                <span className={`${difference > 0 ? "text-green-600" : "text-red-600"}`}>
                    <span>{`${difference > 0 ? "+" : ""}`}</span>
                    {`${difference}%`}
                </span>
                {` ${subtitle}`}
            </Typography>
        </div>
    )
}

export const CardDashboardDoble: React.FC<CardDashboardProps> = ({ title, subtitle, icon, color, amount, difference, currency }) => {
    return (
        <div className={`flex-col min-w-80 min-h-[26rem] max-h-40 bg-${color}-200 border-2 border-gray-100 rounded-xl p-4 shadow-lg text-gray-900`}>
            <Typography variant="lead" className="mt-2 text-gray-600">{title}</Typography>
            <Typography variant="h1" className="mt-2">{`${currency}${amount}`}</Typography>
            <Typography variant="lead" className="mt-2 text-gray-600">
                <span className={`${difference > 0 ? "text-green-600" : "text-red-600"}`}>
                    <span>{`${difference > 0 ? "+" : ""}`}</span>
                    {`${difference}%`}
                </span>
                {` ${subtitle}`}
            </Typography>
        </div>
    )
}

export const CardDashboardSummary: React.FC = () => {
    return (
        <div>
            
        </div>
    )
}

