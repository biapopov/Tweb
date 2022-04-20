import { getParent, getParentOfType, types } from 'mobx-state-tree'
import RootStore from './root_store'


export const ContentModel = types.model('ContentModel', {
    id: types.identifier,
    seen: false,
    model: '',
    audio: '',
    camera_web: '',
    segment: '',
    capacitate_ssd: '',
    tip_display: '',
    frecventa_ram: ''
})
    .views((self) => ({
        get isSeen() {
            return self.seen
        },

        findInTitle(param: any) {
            self.model.includes(param)
        }
    }))
    .actions((self) => ({
        changeMODEL(value: string) {
            self.model = value
        },
        changeAUDIO(value: string) {
            self.audio = value
        },
        changeCAMERA_WEB(value: string) {
            self.camera_web = value
        },
        changeSEGMENT(value: string) {
            self.segment = value
        },
        changeCAPACITATE_SSD(value: string) {
            self.capacitate_ssd = value
        },
        changeTIP_DISPLAY(value: string) {
            self.tip_display = value
        },
        changeFRECVENTA_RAM(value: string) {
            self.frecventa_ram = value
        },

        changeSeen(state: boolean) {
            console.log('>>state', state)
            self.seen = state
        },

        addNote() {
            const rootStore = getParentOfType(self, RootStore)
            rootStore.addNote(self.id)
        },

        removeNote() {
            const rootStore = getParentOfType(self, RootStore)
            rootStore.removeNote(self.id)
        }

    }))


