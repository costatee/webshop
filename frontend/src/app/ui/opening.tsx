import Image from "next/image"

export const Opening: React.FC = (): JSX.Element => {
    return (
        <div className="w-screen bg-[#FAFAFA] h-[40vh] flex">
            <div className="flex w-[50vw]">
                <ul className="flex flex-col p-8 text-gray-900 text-[0.85rem] md:text-[1.2rem]">
                    <li className="md:text-[1.7rem] text-[1.1rem] text-gray-800 mb-1">Opening hours</li>
                    <li>Monday - Friday</li>
                    <li>9:00 am - 6:00 pm</li>
                    <li>Saturday</li>
                    <li>9:00 am - 6:00 pm</li>
                    <li>Sunday</li>
                    <li>Closed</li>
                    <li className="mt-6 md:text-[1.7rem] text-[1.1rem] text-gray-800 mb-1">Contact us</li>
                    <li><a href="mailto:attila@attilaszepe.com">info@sushihouse.com</a></li>
                    <li><a href="tel:+346612345678">+34 661 234 5678</a></li>
                </ul>
            </div>
            <div className="flex relative w-[50vw]">
                <img src="/sushi/sushi1.jpg" alt="image 1" className="h-full w-full object-cover" />
            </div>
        </div>
    )
}