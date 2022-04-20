import { Instance } from 'mobx-state-tree'
import { ContentModel } from '../model_store/model';
import RootStore from '../model_store/root_store';

export interface MacBook{
    describe:{
        model : string;
        audio : string;
        camera_web : string;
        segment : string;
        capacitate_ssd : string;
    }
}

export interface MacBook_extend extends MacBook {
    describe_extend:{
        tip_display : string;
        frecventa_ram : string;
    }
}

export interface IRootStore extends Instance<typeof RootStore> {
}

export interface IContentModel extends Instance<typeof ContentModel> {
}