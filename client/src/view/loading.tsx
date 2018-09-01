import * as React from 'react';
import { ldsEllipsis } from 'view/loading.css';

export class Loading extends React.Component {
  render() {
    return (
      <div className={ldsEllipsis}>
        <div>
          <div>
          </div>
        </div>
        <div>
          <div>
          </div>
        </div>
        <div>
          <div>
          </div>
        </div>
        <div>
          <div>
          </div>
        </div>
        <div>
          <div>
          </div>
        </div>
      </div>
    )
  }
}