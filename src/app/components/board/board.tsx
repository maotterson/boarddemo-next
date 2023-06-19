import Tile from "./tile";

export default function Board() {
    const grid : Status[][] =
    [
        [{'piece':'a'},{'piece':'b'},{},{},{},{},{},{'piece':'a'}],
        [{},{},{},{},{},{},{},{}],
        [{},{},{},{},{},{},{},{}],
        [{},{},{},{},{},{},{},{}],
        [{},{},{},{},{},{},{},{}],
        [{},{},{},{},{},{},{},{}],
        [{},{},{},{},{},{},{},{}],
        [{'piece':'a'},{},{},{},{},{},{},{'piece':'a'}]
    ];

    const getTileBackground = (index : number) => {
        
        const numRows = grid.length;
        const currentRow = index/numRows;
        const val = Math.trunc(currentRow + index);
        if(val % 2 == 0) return 'bg-zinc-700';
        return 'bg-zinc-800';
    };
    

    return (
        <div className="place-content-center grid grid-rows-8 grid-cols-8 gap-0 m-0 p-0">
            {([] as Status[]).concat(... grid).map((element, index) =>
                {
                    return <Tile status={element} tileBackground={getTileBackground(index)}/>
                } 
            )}
        </div>
    )
  }
  