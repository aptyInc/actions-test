echo "Base branch $BASE_BRANCH"

echo "Current branch $CURRENT_BRANCH"

echo "finding the diff between $BASE_BRANCH and $CURRENT_BRANCH"

COMMAND="git diff "$BASE_BRANCH" "${CURRENT_BRANCH}" -- ./ ./"

OUTPUT=$(${COMMAND})

size=${#OUTPUT} 

echo "difference between $BASE_BRANCH and $CURRENT_BRANCH is $size"

echo "::set-output name=size::${size}"