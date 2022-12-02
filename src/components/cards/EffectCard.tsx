import type { FC } from 'react'
import type { Effect } from '~/lib/models'
import { classNames } from '~/lib/utils'

import Card from './Card'
import { emojify } from './images'

import styles from '~/styles/EffectCard.module.css'

const toClassName = (s: string) => s.replaceAll(' ', '')

const EffectCard: FC<{ type: Effect }> = ({ type }) => (
  <Card className={styles[toClassName(type)]}>
    <picture className={styles.image}>{emojify(type)}</picture>
    <h1>{type}</h1>
  </Card>
)

export default EffectCard
