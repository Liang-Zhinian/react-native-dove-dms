/**
 * MIT License
 *
 * Copyright (c) 2017 johnwakley
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

// @flow

import React from 'react'
import {TabNavigator} from 'react-navigation'
import colors from './common/colors'
import {TrendingStackView, MostStarredStackView, DocumentsStackView} from './common/stackNavigation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

function tabNavigationOptions (label: string, iconName: string) {
  return {
    tabBarLabel: label,
    tabBarIcon: ({tintColor}) => (
      <MaterialIcons
        name={iconName}
        size={26}
        style={{color: tintColor}}
        accessibilityLabel={label}
      />
    )
  }
}

const TabView = TabNavigator(
  {
    Trending: {
      screen: TrendingStackView,
      navigationOptions: tabNavigationOptions('Trending', 'trending-up')
    },
    MostStarred: {
      screen: MostStarredStackView,
      navigationOptions: tabNavigationOptions('Most Starred', 'star')
    },
    Documents: {
      screen: DocumentsStackView,
      navigationOptions: drawerViewNavigationOptions('Documents', 'trending-up')
    }
  },
  {
    tabBarOptions: {
      activeTintColor: colors.primary
    }
  }
)

export default TabView