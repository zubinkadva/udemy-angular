var Like = (function () {
    function Like(_likes, _isSelected) {
        this._likes = _likes;
        this._isSelected = _isSelected;
        if (!this._likes)
            this._likes = 0;
        if (!this._isSelected)
            this._isSelected = false;
    }
    Object.defineProperty(Like.prototype, "likes", {
        get: function () {
            return this._likes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    Like.prototype.getResults = function () {
        console.log('Likes: ' + this._likes + ', isSelected: ' + this._isSelected);
    };
    Like.prototype.click = function () {
        this._likes = this._isSelected ? this._likes - 1 : this._likes + 1;
        if (this._likes < 0)
            throw new Error('Likes cannot be negative');
        this._isSelected = !this._isSelected;
        this.getResults();
    };
    return Like;
})();
exports.Like = Like;
