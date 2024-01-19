import { useEffect, useState } from "react"

const useOnlineStatus = () => {

    const [onlineStatus, setonlineStatus] = useState(true);

    useEffect( () => {
        
        window.addEventListener("offline", () => {
            setonlineStatus(false);
            console.log("Offline");
        });

        window.addEventListener("online", () => {
            setonlineStatus(true);
            console.log("Online");
        });

    }, []);

    return onlineStatus;

};

export default useOnlineStatus;