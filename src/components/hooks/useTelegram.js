const tg = window.Telegram.WebApp;
console.log(tg)

export function useTelegram() {
    const onClose = () => {
        tg.close();
    }

    const onToggleButton = () => {
        if (tg.MainButton.isVisable) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            
        }
    }
    return {
        tg,
        user: tg.initDataUnsafe?.user,
        onClose,
        onToggleButton,
        
    }
}
