/**
 * COPYRIGHT (c) Siemens AG
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from 'react';

export const TextareaDisabled: React.FC = () => {
  return (
    <textarea
      className="form-control"
      placeholder="Enter text here"
      disabled
    ></textarea>
  );
};
