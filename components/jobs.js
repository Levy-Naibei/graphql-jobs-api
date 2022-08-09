import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import styles from '../styles/Home.module.scss';

const Jobs = ({ jobs, query }) => {

  return (
    <div>
      {jobs.map(job => {
        return (
          <div key={job.id} className={styles.main_content}>
            <div className={styles.card_header}>
              <div className={styles.job_title}>{job.title}</div>
            </div>
            <div className={styles.company_name}>{job.company.name}</div>
            <div className={styles.job_location}> <span><strong>Location: </strong></span>
              {
                job.cities.map(city => {
                  return (
                    <span
                      key={city.id}>
                      {city.name}
                    </span>
                  )
                })
              } &nbsp;
              <span>{job.remotes.length !== 0 && job.remotes[0].name}</span>
            </div>
            <div className={styles.tech_stack}>
              {
                job.tags.map(tag => {
                  return (
                    <span
                      key={tag.id}>
                      {tag.name}
                    </span>
                  )
                })
              }
            </div>
            <div className={styles.application_link}>
              <a
                href={job.applyUrl}
                target='blank'
                rel="noopener noreferrer">
                <Button
                  colorScheme='teal'
                  size='md'
                  className={styles.apply_button}>
                  Apply Now!
                </Button>
              </a>
            </div>
            {/* <div>More info: {job.userEmail}</div> */}
          </div>
        )
      })
      }
    </div>
  )
}

export default Jobs;
