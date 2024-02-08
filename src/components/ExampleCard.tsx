import type { ReactElement } from "react";
import cardImgUrl from "~/assets/images/card-image.jpg";

export interface ExampleCardProps {
  label: string;
  onShare(): void;
}

export function ExampleCard({ label, onShare }: ExampleCardProps): ReactElement {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={cardImgUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{label}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
        <div className="card-actions justify-end">
          <button onClick={onShare} className="btn btn-primary" data-testid="example-card__share-button">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
