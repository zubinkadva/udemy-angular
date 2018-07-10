export class Like {

    constructor(private _likes?: number, private _isSelected?: boolean) {
        if(!this._likes) this._likes = 0;
        if(!this._isSelected) this._isSelected = false;
     }    

    get likes() { 
        return this._likes;
    }

    get isSelected() { 
        return this._isSelected;
    }

    getResults() {
        console.log('Likes: ' + this._likes + ', isSelected: ' + this._isSelected);
    }

    click() {        
        this._likes = this._isSelected ? this._likes - 1 : this._likes + 1;   
        if(this._likes < 0) throw new Error('Likes cannot be negative');         
        this._isSelected = !this._isSelected;
        this.getResults();
    }
    
    
    
}