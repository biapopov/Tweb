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