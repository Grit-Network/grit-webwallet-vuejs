<template>
    <div class="contents">
        <span class="text-gray">{{ $t('importance') }}:</span>
        <span>{{ score }}</span>
    </div>
</template>

<script lang="ts">
import { ImportanceScoreDisplayTs } from './ImportanceScoreDisplayTs';

export default class ImportanceScoreDisplay extends ImportanceScoreDisplayTs {}
</script>
