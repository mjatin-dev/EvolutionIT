import { NextPage } from "next";
import styles from "./styles.module.scss";
import thoughtProcess from "../../assets/images/thought-process.svg";
import Image from "next/image";
import milestone, {
  MilestoneItem as MilestoneItemInterface,
} from "../constants/milestones";
const Milestones: NextPage = () => {
  return (
    <>
      <div className={`${styles.milestoneContainer} container`}>
        <div className={styles.milestoneData}>
          <p className="secondary-heading">{milestone.heading}</p>
          <div className={styles.milestoneDataGrid}>
            {milestone.list &&
              milestone.list.map((item) => (
                <MilestoneItem key={item.count} {...item} />
              ))}
          </div>
        </div>
        <div className={styles.milestoneImage}>
          <Image src={thoughtProcess} alt="thought-process" />
        </div>
      </div>
    </>
  );
};

const MilestoneItem: NextPage<MilestoneItemInterface> = ({
  count,
  title,
  description,
}) => {
  return (
    <div className={styles.milestoneDataItem}>
      <span className={styles.milestoneCount}>
        {count}.&nbsp;
        <p className="normal-text">{title}</p>
      </span>
      <p className="normal-text">{description}</p>
    </div>
  );
};

export default Milestones;
