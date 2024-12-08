import React from 'react';
import { Tooltip as ReactTooltip } from "react-tooltip";


const TooltipExample = () => {
    return (
      <div>
        <div>

          <button
            data-tooltip-id="my-tooltip"
            data-tooltip-content="This is a tooltip for the button!"
          >
            Hover me
          </button>

          {/* React Tooltip */}
          <ReactTooltip id="my-tooltip" place="top" effect="solid" />
        </div>
      </div>
    );
};

export default TooltipExample;