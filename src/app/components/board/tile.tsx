type TileStatus = {
    status : Status,
    tileBackground : String
};

export default function Tile(props: TileStatus) {
    const {status, tileBackground} = props;

    return (
        <div className={tileBackground + " mx-0 my-0 col-span-1 aspect-square"}>
            {status.piece ? status.piece : '' }
        </div>
    )
  }
  