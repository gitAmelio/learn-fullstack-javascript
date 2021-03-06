import React from 'react';

const ContestsPreview = (contest) => (
    <div className="ContestsPreview">
        <div className="category-name">
            {contest.categoryName}
        </div>
        <div className="contest-name">
            {contest.contestName}
        </div>
    </div>
)

export default ContestsPreview;