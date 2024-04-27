import useInfoModel from "@/hooks/useInfoModel"
import useMovie from "@/hooks/useMovie";
import { useCallback, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import PlayButton from "./PlayButton";
import FavoriteButton from "./FavoriteButton";

interface InfoModelProps {
    visible?: boolean,
    onClose: any,
}

const InfoModel: React.FC<InfoModelProps> = ({
    visible,
    onClose,
}) => {
    const [isVisible, setIsVisible] = useState(!!visible);

    const { movieId } = useInfoModel();

    const { data = {} } = useMovie(movieId as string);

    useEffect(() => {
        setIsVisible(!!visible);
    }, [visible, setIsVisible]);

    const handleClose = useCallback(() => {
        setIsVisible(false);
        setTimeout(() => {
            onClose();
        }, 300);
    }, [onClose, setIsVisible]);

    if (!visible) {
        return null;
    }

    return (
        <div className="
        z-50
        transition
        duration-300
        bg-black
        bg-opacity-80
        flex
        justify-center
        items-center
        overflow-x-hidden
        overflow-y-auto
        fixed
        inset-0
        ">
            <div className="
            relative
            w-auto
            mx-auto
            max-w-3xl
            rounded-md
            overflow-hidden
            ">
                <div className={`
                    ${isVisible ? "scale-100" : "scale-0"}
                    transform
                    duration-300
                    bg-zinc-900
                    relative
                    flex-auto
                    drop-shadow-md
                `}>
                    <div className="relative h-96">
                        <video
                            className="
                            w-full
                            h-full
                            brightness-[60%]
                            object-cover
                            "
                            muted
                            autoPlay
                            loop
                            poster={data?.thumbnailUrl}
                            src={data?.videoUrl}
                        ></video>
                        <div
                            onClick={handleClose}
                            className="
                            cursor-pointer
                            absolute
                            top-3
                            right-3
                            bg-black
                            h-10
                            w-10
                            rounded-full
                            flex
                            justify-center
                            items-center
                            bg-opacity-70
                        ">
                            <AiOutlineClose className="text-white" size={20} />
                        </div>
                        <div className="
                        absolute
                        bottom-[10%]
                        left-10
                        ">
                            <p className="
                            text-white
                            text-3xl
                            md:text-4xl
                            lg:text-3xl
                            font-semibold
                            h-full
                            mb-8
                            ">
                                {data?.title}
                            </p>
                            <div className="
                            flex
                            flex-row
                            items-center
                            gap-4
                            ">
                                <PlayButton movieId={data?.id} />
                                <FavoriteButton movieId={data?.id} />
                            </div>
                        </div>
                    </div>
                    <div className="px-12 py-8">
                        <p className="text-green-400 font-semibold text-lg">
                                New
                        </p>
                        <p className="text-white text-lg">
                            {data?.duration}
                        </p>
                        <p className="text-white text-lg">
                            {data?.genra}
                        </p>
                        <p className="text-white text-lg">
                            {data?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoModel;