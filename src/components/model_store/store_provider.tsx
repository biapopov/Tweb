import RootStore from "./root_store"


const storeProvider = RootStore.create({
    contents: [
        {
            id: '1',
            seen: false,
            model: 'MacBook 14 2021',
            audio: 'Dolby Atmos',
            camera_web: '1080p',
            segment: 'Home and Office',
            capacitate_ssd: '1 TB',
            tip_display: 'Liquid Retina',
            frecventa_ram: '2400 MHz',
            },
            {
            id: '2',
            seen: false,
            model: 'MacBook 14 2021',
            audio: 'Dolby',
            camera_web: '720p',
            segment: 'Home and Office',
            capacitate_ssd: '256 GB',
            tip_display: 'IPS',
            frecventa_ram: '4266 MHz',
            },
            {
            id: '3',
            seen: false,
            model: 'MacBook 13 (2020)',
            audio: 'Dolby',
            camera_web: '1080p',
            segment: 'Home and Office',
            capacitate_ssd: '512 GB',
            tip_display: 'Liquid Retina XDR',
            frecventa_ram: '2133 MHz',
            }
    ]
})

export default storeProvider